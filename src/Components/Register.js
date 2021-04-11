import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Register = ({ setToken }) => {

    const [show, setShow] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState("Register");
    const [username, setUsername] = useState("");
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [localToken, setLocalToken] = useState("");

    // If the Player was created successfully, display the token in the modal.
    function displayToken() {
        if (localToken !== "") {
            return(
                <>
                    <h1>SAVE THIS TOKEN</h1>
                    <label className="d-block text-dark">Token: </label>
                    <p type="text" className="mb-2 d-block w-100 text-dark">{localToken}</p>
                </>
            );
        }
    }

    function displayUsernameIsTaken() {
        if (usernameTaken) {
            return(
                <p className="text-warning font-weight-bold">That username is taken</p>
            );
        } else {
            return(
                <></>
            );
        }
    }

    function getToken(playerUsername) {
        axios({
            method: 'post',
            url: `https://api.spacetraders.io/users/${playerUsername}/token`,
            responseType: 'json',
            // auth: {
            //   username: playerUsername,
            //   token: token
            // }
        }).then((response) => {
            console.log(response.data.token);
            setLocalToken(response.data.token);
            setToken(response.data.token);
            setSubmitButtonText("Log In");
            setUsernameTaken(false);
        }).catch((error) => {
            let errorCode = error.response.data.error.code;
            console.log("FAILURE!  Error code: " + errorCode);
            if (errorCode === 40901) {
                console.log("That username is unavailable");
                setUsernameTaken(true);
            }
        });
    }


    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleSubmit = () => {
        getToken(username);
    }

    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <Button className="mr-2" variant="primary" onClick={handleShow}>
                Register
            </Button>

            {/* {localStorage.getItem("ST_UserData") !== null &&
                <Button variant="primary" onClick={handleLoginUsingExistingData}>
                    Log In (local)
                </Button>
            } */}

            <Modal show={show} onHide={handleClose} className="login-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">Enter a Username to Register</Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-75 m-auto">
                    <label className="d-block text-dark">Username: </label>
                    <input type="text" id="username-text" onChange={userNameHandler} value={username} placeholder="Username..." className="mb-2 d-block w-100 text-dark" />
                    {displayUsernameIsTaken()}
                    {displayToken()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {submitButtonText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Register;