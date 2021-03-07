import React from 'react';
import { Badge } from 'react-bootstrap';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loan = ({ loan }) => {


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


        </div>

    );
}

export default Loan;