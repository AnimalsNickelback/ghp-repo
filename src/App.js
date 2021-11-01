import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import PlayerTable from './components/PlayerTable'
import PositionTabs from './components/PositionTabs'
import TextBox from './components/TextBox';

function App() {

  // State to hold list of players
  const[players, setPlayers] = useState([])

  // State to hold selected players
  const[selectedPlayerState, setSelectedPlayers] = useState([]);

  // Means the users optimal lineup will be shown
  // Will automatically show lineup if true
  const[enableLineup, setEnableLineup] = useState(false);

  const[appText, setAppText] = useState("Welcome to Football App!");

  // Boolean to tell player table the user has selected to view their selections
  const[viewSelections, setViewSelections] = useState(false);

  const[enoughPlayers, setEnoughPlayers] = useState(false);

  
  useEffect(() => {
        // Default to show QBs
        if(players.length === 0 && !viewSelections) {
          getPlayers('QB');
          //let element = document.getElementById('QBtab');
          //element.classList.add('active');
        }
})

  // Used by reset button
  const initializePageFromReset = () => {
    getPlayers('QB');
    let  selElement = document.getElementById('SELtab');
    selElement.classList.remove('active');
    let qbElement = document.getElementById('QBtab');
    qbElement.classList.add('active');
  }

  const getPlayers = (position) => {

    // Enables the Lineup tab
    setEnableLineup(false);
    setViewSelections(false);
    document.getElementById('SubmitBtn').disabled = false;

    // Set Text 
    determineAppText(position);

    const baseUrl = 'http://localhost:8000/players/';
    const url = baseUrl + position;
    const httpReq = new XMLHttpRequest();
    console.log(url);

    if(position == 'SEL') {
      setViewSelections(true);
      httpReq.open('POST', url, true);
      httpReq.setRequestHeader('Content-type', 'application/json');

      httpReq.onreadystatechange = function() {//Call a function when the state changes.
        if(httpReq.readyState == 4 && httpReq.status == 201) {
          let selections = JSON.parse(httpReq.responseText);
          setPlayers(selections);
        }

        else {
          // Error message
        }
      }

      let data = {"selectedPlayers" : selectedPlayerState};
      httpReq.send(JSON.stringify(data));
      return;
    }

    httpReq.onload = function () {
      let playerList = JSON.parse(httpReq.responseText);
      setPlayers(playerList)
    }
      httpReq.open("GET", url);
      httpReq.send();
  }

  // add is boolean value
  // True if add, false if delete
  const onSelectPlayer = (playerObj, add) => {
    if(add){
      //if(!selectedPlayerState.includes(playerObj)){ 
        setSelectedPlayers(arr => [...arr, playerObj]);
      //}
    }
    else {
      setSelectedPlayers(arr => (arr.filter((uid) => uid.uid !== playerObj.uid)));
    }
  }

  // Sets the text above the table
  // Text depends on position selected
  const determineAppText = (position) => {
    let text = "";
    switch(position) {
      case 'QB':
        text = "Select at least 2 Players.";
        break; 
      case 'RB':
        text = "Select at least 3 Players.";
        break;
      case 'WR':
        text = "Select at least 3 Players.";
        break;
      case 'TE':
        text = "Select at least 2 Players.";
        break;
      case 'FLEX':
        text = "Select at least 2 Players.";
        break;
      case 'DEF':
        text = "Select at least 2 Teams.";
        break;
      case 'SEL':
        text = "Your current Selections";
        break;
      case 'SUBMIT':
        text = "Your optimal Lineup!";
        break;
      default:
        text = "Welcome to Football App!";
        break;
    }
    setAppText(text);
  }

  // Checks if minimum number of players are selected
  // Take in position of players being displayed
  // Compare selections with min number of selections
  // Return true if minimum number of players is met
  // TODO - recursion??
  const enoughPlayersSelected = ()  => {

    let QBct = 0;
    let RBct = 0;
    let WRct = 0;
    let TEct = 0;
    let Dct = 0;
    
    for(let i = 0; i < selectedPlayerState.length; i++) {
      switch(selectedPlayerState[i].position) {
        case 'QB':
          QBct++;
          break;
        case 'RB':
          RBct++;
          break;
        case 'WR':
          WRct++;
          break;
        case 'TE':
          TEct++;
          break;
        case 'D':
          Dct++;
          break;
        default:
          break;
      }
    }

    if(QBct < 1 || RBct < 2 || WRct < 2 || TEct < 1 || Dct < 1) {
      
      setEnoughPlayers(false);
      return;
    }
    setEnoughPlayers(true);
  }

  // Logic to submit lineup to backend
  const onSubmit = () => {

    if(!enoughPlayers){
      setAppText("Select a player from each position and Ty Again!");
      return;
    }
    else {
      setAppText("Welcome to Football App");
    }

    // Disable Submit button on submit click
    document.getElementById('SubmitBtn').disabled= true;

    // Set text
    determineAppText("SUBMIT");

    // Create http call to backend
    const url = 'http://localhost:8000/submitlineup';
    const httpReq = new XMLHttpRequest();
    httpReq.open('POST', url, true);
    httpReq.setRequestHeader('Content-type', 'application/json');
    
    httpReq.onreadystatechange = function() {//Call a function when the state changes.
      if(httpReq.readyState == 4 && httpReq.status == 201) {
        // Post was successful, put code here for selecting lineup tab
        setEnableLineup(true);
        let returnedLineup = JSON.parse(httpReq.responseText);
        setPlayers(returnedLineup);
      }
      else {
        // Error message
      }
    }

    let data = {"selectedPlayers" : selectedPlayerState};

    httpReq.send(JSON.stringify(data));

  }

  // Called when reset button is clicked
  // Removes all selections
  const clearSelections = () => {
    // if selections is open, reset screen to qb tab
    if(viewSelections) {
      initializePageFromReset(true);
    }
    setSelectedPlayers([]);
  }

  // playerArray is an array of players to be passed in
  return (
    <div>
      <div className="container-fluid bgImage">
        <Header />
        <div className='container'>
          <TextBox text={appText}/>
          <PositionTabs position={getPlayers} enableLineup={enableLineup} />
          <div className='row'>
            <div className='col table-player'>
              <PlayerTable playerArray={players} onSelectPlayer={onSelectPlayer} selectedPlayers={selectedPlayerState} viewSelections={viewSelections} validateSelectionLength={enoughPlayersSelected}/>
            </div>
        </div>
        <div className='row'>
        <div className='col'>
        <div className="text-center pt-4">
          <button className='btn btn-secondary p-3 px-5' onClick={clearSelections}>Reset</button></div>
        </div>
        <div className='col'>
          <div className="text-center pt-4">
            <button className="btn btn-primary p-3 px-5" onClick={onSubmit} aria-disabled="true" id="SubmitBtn">Submit</button></div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
