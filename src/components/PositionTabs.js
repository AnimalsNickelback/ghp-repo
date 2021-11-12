import React, { useState, useEffect } from 'react';

const PositionTabs = ({ position, enableLineup }) => {

    // If enableLineup means user has submitted lineup
    // Lineup tab should be active
    useEffect(() => {
        if (enableLineup) {
            refreshTable('Lineup');
        }
    })

    const refreshTable = (posTab) => {
        let id = posTab + 'tab';
        let dropDown = document.getElementById('PosBtn');
        dropDown.textContent = posTab;

        // Calls function in AppJs to refresh the list of players
        // No need to refresh players if displaying lineup
        if (posTab != 'Lineup') {
            position(posTab);
        }
    }

    // pass in whether previous or next arrow clicked
    // called when arrow button is clicked
    const arrowClick = (direction) => {

        // If selections showing, set position back to QB on arrow click
        let posBtn = document.getElementById("PosBtn");
        if(posBtn.textContent == "SEL") {
            refreshTable("QB");
            return;
        }

        // If lineup is showing, arrow click disabled
        if(posBtn.textContent == "Lineup") {
            return;
        }

        // create array of positions
        let positionList = ["QB", "RB", "WR", "TE", "FLEX", "DEF"];

        // get current pos
        let text = posBtn.textContent;
        let index = positionList.indexOf(text);

        if (index < 0) {
            return;
        }
        // depending on click iterate through array
        let position = "";
        if (direction == "next") {
            if (index == 5) {
                position = positionList[0];
            }
            else {
                index = index + 1;
                position = positionList[index];
            }
        }
        else if (direction == "prev") {
            if (index == 0) {
                position = positionList[5];
            }
            else {
                index = index - 1;
                position = positionList[index];
            }
        }
        refreshTable(position);
        return;
    }

    return (
        <div>
            <div className="row">
                <div className="dropdown" id="PosDrop">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" id="PosBtn">QB</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => refreshTable('QB')} id="QBtab">QB</a></li>
                        <li><a className="dropdown-item" onClick={() => refreshTable('RB')} id="RBtab">RB</a></li>
                        <li><a className="dropdown-item" onClick={() => refreshTable('WR')} id="WRtab">WR</a></li>
                        <li><a className="dropdown-item" onClick={() => refreshTable('TE')} id="TEtab">TE</a></li>
                        <li><a className="dropdown-item" onClick={() => refreshTable('FLEX')} id="FLEXtab">FLEX</a></li>
                        <li><a className="dropdown-item" onClick={() => refreshTable('DEF')} id="DEFtab">DEF</a></li>
                    </ul>
                    <button type="button" className="btn btn-light"><i className="arrow left" onClick={() => arrowClick("prev")}></i></button>
                    <button type="button" className="btn btn-light"><i className="arrow right" onClick={() => arrowClick("next")}></i></button>
                </div>
                <div className="col">
                <button type="button" className="btn btn-link px-3" onClick={() => refreshTable('SEL')}>My Selected Players</button>
                </div>
            </div>
        </div>
    )
}

export default PositionTabs