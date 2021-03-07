import React from 'react';
import { Badge } from 'react-bootstrap';

const Loan = ({ loan }) => {


    return(


        <div className="loans-dashboard--loan bg-success">
            <h2 className="my-0">A Loan</h2>
            {loan.collateralRequired && 
                <Badge pill variant="warning">
                    Collateral Required
                </Badge>
            }

        </div>

    );
}

export default Loan;