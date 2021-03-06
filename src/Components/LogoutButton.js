import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LogoutButton = ({ setUserData, setToken }) => {

    // Get info from local storage: Did player click "don't show modal"?
    // If so, set local setDoNotShow state to true.
    useEffect(() => {
        if (localStorage.getItem("ST_doNotShowLogoutModal") !== null) {
            setDoNotShow(localStorage.getItem("ST_doNotShowLogoutModal"));
            console.log("DON'T SHOW MODAL!");
        } else {
            console.log("Show logout confirmation modal next time");
        }
    }, []);


    const[show, setShow] = useState(false);
    const[doNotShow, setDoNotShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setDoNotShow(false);
    }
    const handleShow = () => setShow(true);
    const handleDoNotShow = () => {
        console.log("Change Checkbox!!");
        setDoNotShow(!doNotShow);
    }

    // Remove user data from local storage, reset some states.
    // if doNotShow was checked, ensure that the modal doesn't show up next time the user clicks the ' X ' button.
    const handleLogout = () => {
        localStorage.removeItem("ST_UserData");
        setUserData({});
        setToken("");
        if (doNotShow) {
            localStorage.setItem("ST_doNotShowLogoutModal", true);
        }
    }


    return (
        <>
            <FontAwesomeIcon icon={faTimes} className="user-nav--logoff-btn-icon" onClick={doNotShow ? handleLogout : handleShow} title="Log out?" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Logging out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Are you sure you want to log out?</h3>
                    <div className="d-flex align-items-center mt-3">
                        <input type="checkbox" id="do-not-show" value={doNotShow} onChange={handleDoNotShow} />
                        <label className="ml-2 mb-0" htmlFor="do-not-show">Don't ask me again</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleLogout}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LogoutButton;