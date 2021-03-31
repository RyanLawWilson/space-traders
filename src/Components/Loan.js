import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Loan = ({ loan, setUserData }) => {


    const acceptLoanHandler = () => {

    }



    function takeOutNewLoan(token) {
        axios({
            method: 'post',
            url: `https://api.spacetraders.io/users/loans?token=${token}&type=${loan.type}`,
            responseType: 'json',
        }).then((response) => {
            console.log("Success!");
            console.log(response.data.user);
            //setUserData(response.data);
            //setAvailableLoans(response.data.loans);
            //localStorage.setItem("ST_availableLoans", JSON.stringify(response.data.loans));
        }).catch((err) => {
            console.log("Failure");
            console.log(err);
        });
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
            <Button variant="warning" className="loan-confirm-btn" onClick={acceptLoanHandler}>Accept</Button>

        </div>

    );
}

export default Loan;