/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CredentialModal from './CredentialModal';
import LogoutButton from './LogoutButton';
import TimeSinceUpdate from './TimeSinceUpdate';
import Register from './Register';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const UserNav = ({ setUserData, userData, setToken, token, setPanel }) => {



    const panelChangeHandler = (e) => {
        console.log(e.target);
        setPanel(e.target.textContent);
    }








    // Render User info if there is a valid token
    function UserInfo() {
        return(
            <div className="position-relative">
                <strong className="col-12 user-nav--username">{userData.username}</strong>
                <strong className="col-12 user-nav--money">${userData.credits}</strong>
                <LogoutButton setUserData={setUserData} setToken={setToken} />
                <TimeSinceUpdate userData={userData} />
            </div>
        );
    }

    // Render Log in Button if there is no local storage
    function LoginButton() {
        console.log("Rendering Login button");
        return(
            <>
                <Register setToken={setToken} />
                <CredentialModal setUserData={setUserData} setToken={setToken} />
            </>
        );
    }


    // Helper method to test if object is empty.
    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return true;
    }


    var userInfoOrLoginButton;
    if (isEmpty(userData)) {
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
                        <button className="btn btn-warning" href="#" onClick={panelChangeHandler}>Loans</button>
                        <button className="btn btn-success" href="#" onClick={panelChangeHandler}>Ships</button>
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