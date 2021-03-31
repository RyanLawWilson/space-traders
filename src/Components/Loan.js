import { React, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Loan = ({ loan, setUserData, userData, token, loanAlreadyAccepted }) => {

    /**
     * Loans have this structure:
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

    const acceptLoanHandler = () => {
        if (loan.accepted)
            console.log("You already took out this loan");
        else
            takeOutNewLoan(token);
    }



    function takeOutNewLoan(token) {
        //console.log(userData.username);
        //console.log(`https://api.spacetraders.io/users/${userData.username}/loans?token=${token}&type=${loan.type}`);
        axios({
            method: 'post',
            url: `https://api.spacetraders.io/users/${userData.username}/loans?token=${token}&type=${loan.type}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response.data.user);
            loan.accepted = true;
            console.log("Accepted now set to: " + loan.accepted);
            setUserData(response.data);
            localStorage.setItem("ST_UserData", JSON.stringify(response.data.user));
        }).catch((error) => {
            console.log("Failure");
            let errorCode = error.response.data.error.code;
            console.log(errorCode);

            // Access denied.  Either the token does not exist or the user hasn't signed in.
            if (errorCode === 40101) {
                console.log("You are not logged in or your account does not exist anymore");
            } else if (errorCode === 422) {
                console.log("You already have this loan");
            }
        });
    }


    function enableDisableButton() {
        if (loan.accepted)
            return <Button disabled variant="warning" className="loan-confirm-btn" onClick={acceptLoanHandler}>Accepted</Button>
        else
            return <Button variant="warning" className="loan-confirm-btn" onClick={acceptLoanHandler}>Accept</Button>
    }

    return(
        <div className="loans-dashboard--loan">
            <div className="d-flex align-items-center st_flex-wrap">
                <h4 className="my-0 mr-2">{loan.type}</h4>
                {loan.collateralRequired &&
                    <Badge pill variant="warning" className="mt-1">
                        Collateral
                    </Badge>
                }
            </div>
            <div className="d-flex st_flex-wrap align-items-center">
                {/* Got Regex from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}
                <h3 className="mb-0">${loan.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <span className="font-weight-bolder mx-2">@</span>
                <h4 className="mb-0">{loan.rate}%</h4>
                <Badge pill variant="dark" className="mt-1 mx-3">
                    <span className="font-weight-bolder text-light">{loan.termInDays} <FontAwesomeIcon icon={faClock} /></span>
                </Badge>
            </div>
            <div>
                <h6>
                    Payback Amt:&nbsp;
                    ${((loan.amount * loan.rate * 0.01) + loan.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h6>
            </div>
            {enableDisableButton()}

        </div>

    );
}

export default Loan;