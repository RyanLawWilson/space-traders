import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Loan from './Loan';

const LoansDashboard = ({ token, setUserData, userData }) => {

    /**
     * JSON Structure of available Loans:
     * 
     *  [
     *      {
     *          "type":"STARTUP",
     *          "amount":200000,
     *          "rate":40,
     *          "termInDays":2,
     *          "collateralRequired":false,
     *          "accepted":false
     *      }
     *  ]
     * 
     * I added the 'accepted' property.  If the user has accepted that loan,
     * the accept button will be disabled.
     */
    const[availableLoans, setAvailableLoans] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("ST_availableLoans") !== null) {
            console.log("Found available loans in storage:\n");
            console.log(localStorage.getItem("ST_availableLoans"));
            setAvailableLoans(JSON.parse(localStorage.getItem("ST_availableLoans")));
            console.log("Available Loans is now set:\n");
            console.log(availableLoans);
        } else {
            getAvailableLoans(token);
        }

        // If there is userData and the user has loans, check to see if he already accepted one of the available loans.
        console.log(`Available Loans: ${availableLoans.length}`);
        if (userData !== {} && availableLoans.length !== 0) {
            for (let i = 0; i < userData.loans.length; i++) {
                for (let j = 0; j < availableLoans.length; j++) {
                    if (userData.loans[i].type === availableLoans[j].type) {
                        availableLoans[j].accepted = true;
                    }
                }
            }
        }
    }, [token]);


    function getAvailableLoans(token) {
        axios({
            method: 'get',
            url: `https://api.spacetraders.io/game/loans?token=${token}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response.data.loans);
            let loans = response.data.loans;

            console.log("Adding property to each loan retrieved from the API");
            // Add the 'accepted' property to each loan
            for (let i = 0; i < loans.length; i++) {
                loans[i].accepted = false;
            }
            setAvailableLoans(loans);
            localStorage.setItem("ST_availableLoans", JSON.stringify(loans));
        }).catch((err) => {
            console.log("Failure");
            console.log(err);
        });
    }

    return(
        <div className="loans-dashboard">
            <h1>Loans Dashboard</h1>
            {availableLoans.map(loan => (
                <Loan 
                    key={loan.type} 
                    token={token} 
                    loan={loan} 
                    userData={userData} 
                    setUserData={setUserData} 
                />
            ))}
        </div>

    );
}

export default LoansDashboard;