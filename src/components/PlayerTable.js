import React, {useEffect, useState} from 'react';

const PlayerTable = (props) => {

    useEffect(() => {
        props.validateSelectionLength();
    })

    var player1 = {
        uid: 1,
        position: 'QB',
        player_name: 'AAAAA BBBBB',
        team: 'PHI',
        opponent: 'DEN',
        salary: '2000',
        projected_pts: '25'
    };

    // Takes in row number and player UID
    // If player is selected removes selected class
    // If player is not selected, adds the selected class
    const handleRowClick = (rowNumber, playerUid, position) => {
        let rowNum = rowNumber.index + 1;
        let row = document.getElementById('playerTable').rows[rowNum];
        let classes = row.classList;
        let playerObj = {
            "uid": playerUid,
            "position": position        
        };
        if(classes.contains('selected')) {
            // Remove UID from app.js state
            props.onSelectPlayer(playerObj, false, rowNum);
        }
        else {
            // Pass UID to app.js to insert into state
            props.onSelectPlayer(playerObj, true, rowNum);
        }
    }

    // Populates the table
    // Contains logic for marking previously selected players as selected 
    // param player is full player object 
    const getRowData = (player, index) => {
        let selectedPlayers = props.selectedPlayers;
        let selectedRow = false;
        // If player UID is found in state, players row should be highlighted
        if(!props.viewSelections) {
            let output = selectedPlayers.find(arrayElements => arrayElements.uid === player.uid);
            if(output != undefined){
                selectedRow = true;
            }
    }

        // populates table with players
        if(selectedRow) {
            return (
                <tr key={index} className='selected' onClick={() => handleRowClick({index}, player1.uid, player1.position)}>
                    <td>{player1.player_name}</td>
                    <td>{player1.team}</td>
                    <td>{player1.opponent}</td>
                    <td>{player1.salary}</td>
                    <td>{player1.projected_pts}</td>
                </tr>)
        }
        else {
            return (
                <tr key={index} onClick={() => handleRowClick({index}, player1.uid, player1.position)}>
                    <td>{player1.player_name}</td>
                    <td>{player1.team}</td>
                    <td>{player1.opponent}</td>
                    <td>{player1.salary}</td>
                    <td>{player1.projected_pts}</td>
                </tr>
            )
        }

    }
    // Map function calls callback function for each element in array
    return (
        <div className='table-scroll-y'>
            <table id='playerTable' className='table table-hover table-fix-head'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Team</th>
                        <th scope='col'>Opponent</th>
                        <th scope='col'>Salary</th>
                        <th scope='col'>Projected Pts</th>
                    </tr>
                </thead>
                <tbody>
                <tr key='1'>
                    <td>{player1.player_name}</td>
                    <td>{player1.team}</td>
                    <td>{player1.opponent}</td>
                    <td>{player1.salary}</td>
                    <td>{player1.projected_pts}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default PlayerTable