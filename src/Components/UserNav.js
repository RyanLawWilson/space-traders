/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CredentialModal from './CredentialModal';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const UserNav = ({ setUserData, userData }) => {


    return (
        <div className="user-nav--container">
            <div className="user-nav">
                <div className="user-nav--logo">Space Traders</div>
                <div className="user-nav--content">
                    <div className="user-nav--buttons mr-auto">
                        <button className="btn btn-primary" href="#">Get User Info</button>
                        <CredentialModal setUserData={setUserData} />
                        <button className="btn btn-primary" href="#">Option 3</button>
                    </div>
                    <div className="user-nav--user-info--container">
                        {console.log(userData)}
                        <strong className="col-12 user-nav--username">{userData.username}</strong>
                        <strong className="col-12 user-nav--money">$1,000</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNav