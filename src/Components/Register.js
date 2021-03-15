import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Register = ({ setToken }) => {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
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
        }).catch((error) => {
            console.log("FAILURE\n" + error);
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
                    {displayToken()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Register;