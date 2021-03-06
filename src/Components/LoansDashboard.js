import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const LoansDashboard = ({ token }) => {

    useEffect(() => {
        //getAvailableLoans(token);
    }, [token]);


    const[availableLoans, setAvailableLoans] = useState([]);



    function getAvailableLoans(token) {
        axios({
            method: 'get',
            url: `https://api.spacetraders.io/game/loans?token=${token}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response.data.loans);
            setAvailableLoans(response.data.loans);
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