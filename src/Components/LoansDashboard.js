import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Loan from './Loan';

const LoansDashboard = ({ token, setUserData }) => {

    useEffect(() => {
        if (localStorage.getItem("ST_availableLoans") !== null) {
            console.log("Found available loans in storage:\n");
            console.log(localStorage.getItem("ST_availableLoans"));
            setAvailableLoans(JSON.parse(localStorage.getItem("ST_availableLoans")));
        } else {
            getAvailableLoans(token);
        }
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
            localStorage.setItem("ST_availableLoans", JSON.stringify(response.data.loans));
        }).catch((err) => {
            console.log("Failure");
            console.log(err);
        });
    }

    return(


        <div className="loans-dashboard">
            <h1>Loans Dashboard</h1>
            {availableLoans.map(loan => (
                <Loan key={loan.type} loan={loan} setUserData={setUserData} />
            ))}
        </div>

    );
}

export default LoansDashboard;