/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const CredentialModal = ({ setUserData, setToken }) => {

    // Bootstrap state to open/close modal
    const [show, setShow] = useState(false);
    const [userNameText, setUserNameText] = useState("");
    const [tokenText, setTokenText] = useState("");

    const handleClose = () => {
        console.log("testing Close");
        setShow(false);
    }
    const handleShow = () => {
        console.log("testing Show");
        setShow(true);
    }

    const handleSubmit = () => {
        setShow(false);
        //console.log("Username: " + username + " | Token: " + token);
        setToken(tokenText);
        getUserInfo(userNameText, tokenText);
    }

    // If player has local data, use the data and update UserData state.
    const handleLoginUsingExistingData = () => {
        var data = JSON.parse(localStorage.getItem("ST_UserData"));
        setUserData(data);
    }

    const userNameHandler = (e) => {
        setUserNameText(e.target.value);
    }

    const tokenHandler = (e) => {
        setTokenText(e.target.value);
    }

    // Contact spacetraders API if there is no local player data.  Save player data in local storage
    function getUserInfo(playerUsername, token) {
        console.log(`Player Username: ${playerUsername}`);
        console.log("Player Token: " + token);
    
        if (localStorage.getItem("ST_UserData") === null) {
          axios({
            method: 'get',
            url: `https://api.spacetraders.io/users/${playerUsername}?token=${token}`,
            responseType: 'json',
            // auth: {
            //   username: playerUsername,
            //   token: token
            // }
          }).then((response) => {
            // Get response from the API then save it to local storage to reduce requests in the future.
            // Object properties: username, credits, ships, loans
            localStorage.setItem("ST_UserData", JSON.stringify(response.data.user));
            console.log(response.data.user);
            setUserData(response.data.user);
          }).catch((error) => {
            console.log("FAILURE\n" + error);
          });
        }
      }

    return (
        <>
            {localStorage.getItem("ST_UserData") === null &&
                <Button variant="primary" onClick={handleShow}>
                    Log In (no local)
                </Button>
            }

            {localStorage.getItem("ST_UserData") !== null &&
                <Button variant="primary" onClick={handleLoginUsingExistingData}>
                    Log In (local)
                </Button>
            }
            
            <Modal show={show} onHide={handleClose} className="login-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">Enter your Username and Token to log in</Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-75 m-auto">
                    <label className="d-block text-dark">Username: </label>
                    <input type="text" id="username-text" onChange={userNameHandler} value={userNameText} placeholder="Username..." className="mb-2 d-block w-100 text-dark" />
                    <label className="d-block text-dark">Token: </label>
                    <input type="password" id="token-text" onChange={tokenHandler} value={tokenText} placeholder="Token..." className="mb-2 d-block w-100 text-dark" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CredentialModal