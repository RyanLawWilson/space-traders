import axios from 'axios';
import React from 'react';

const LoansDashboard = () => {


    function getAvailableLoans(token) {
        axios({
            method: 'get',
            url: `https://api.spacetraders.io/game/loans?token=${token}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response);
        }).catch((err) => {
            console.log("Failure");
            console.log(err);
        });
    }

    return(


        <div className="loans-dashboard bg-danger">
            <h1>TESTING</h1>
        </div>

    );
}

export default LoansDashboard;