import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Register = () => {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");


    // If the Player was created successfully, display the token in the modal.
    var playerToken;
    function displayToken(token) {
        return(
            <>
                <h1>SAVE THIS TOKEN</h1>
                <label className="d-block text-dark">Username: </label>
                <p type="text" className="mb-2 d-block w-100 text-dark">{token}</p>
            </>
        );
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
            console.log(response.data);
            console.log(response.data.token);
            playerToken = displayToken(response.data.token);
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
        setShow(false);
    }

    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
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
                    {playerToken}
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