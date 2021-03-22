import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ShipsDashboard = () => {


    function getAvailableShips(token) {
        axios({
            method: 'get',
            url: `https://api.spacetraders.io/game/ships?token=${token}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response.data.loans);
            //setAvailableLoans(response.data.loans);
            //localStorage.setItem("ST_availableLoans", JSON.stringify(response.data.loans));
        }).catch((err) => {
            console.log("Failure");
            console.log(err);
        });
    }




    return(
        <div className="ships-dashboard">
            <button type="button" onClick={getAvailableShips()}> </button>
        </div>
    );
}

export default ShipsDashboard;