/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CredentialModal from './CredentialModal';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const UserNav = ({ setUserData, userData, setToken, token }) => {


    // Render User info if there is a valid token
    function UserInfo() {
        return(
            <div>
                <strong className="col-12 user-nav--username">{userData.username}</strong>
                <strong className="col-12 user-nav--money">$1,000</strong>
            </div>
        );
    }

    // Render Log in Button if there is no local storage
    function LoginButton() {
        return(
            <CredentialModal setUserData={setUserData} setToken={setToken} />
        );
    }

    var userInfoOrLoginButton;
    if (token === "") {
        userInfoOrLoginButton = LoginButton();
    }
    else {
        userInfoOrLoginButton = UserInfo();
    }

    return (
        <div className="user-nav--container">
            <div className="user-nav">
                <div className="user-nav--logo">Space Traders</div>
                <div className="user-nav--content">
                    <div className="user-nav--buttons mr-auto">
                        {/* <button className="btn btn-primary" href="#">Get User Info</button> */}
                        
                        {/* <button className="btn btn-primary" href="#">Option 3</button> */}
                    </div>
                    <div className="user-nav--user-info--container">
                        {userInfoOrLoginButton}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNav