import React from 'react';
import { Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';


const TimeSinceUpdate = ({ userData }) => {

    const [lastUpdateSince, setLastUpdatedSince] = useState(0);
    const [lastUpdateText, setLastUpdateText] = useState("");

    useEffect(() => {
        resetStopwatch();
    }, [userData]);

    // Display the amount of time that has passed since getting User data
    useEffect(() => {
        if (lastUpdateSince < 60 && lastUpdateSince % 5 === 0) {
            setLastUpdateText(lastUpdateSince.toString() + " s");
        } else if (lastUpdateSince < 3600 && lastUpdateSince % 60 === 0) {
            setLastUpdateText((lastUpdateSince / 60).toString() + " m");
        } else if (lastUpdateSince < 86400 && lastUpdateSince % 3600 === 0) {
            setLastUpdateText((lastUpdateSince / 3600).toString() + " h");
        } else {
            if (lastUpdateSince % 86400 === 0) {
                setLastUpdateText((lastUpdateSince / 86400).toString() + " d");
            }
        }
    }, [lastUpdateSince]);

    let stopwatch = useRef();

    function startStopwatch() {
        setLastUpdatedSince(0);
        let sec = 0;
        //console.log("Stopwatch started");
        stopwatch = setInterval(() => {
            //setLastUpdatedSince(3 + Math.ceil(Math.random() * 10));
            setLastUpdatedSince(sec++ + 1);
        }, 1000);
    }

    function resetStopwatch() {
        clearInterval(stopwatch);
        //console.log("Stopwatch reset");
        startStopwatch();
    }

    return (
        <>
            <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                    <Tooltip id="tooltipbottom">
                        Time since last<br />update from server
                    </Tooltip>
                }
            >
                <Button variant="secondary" className="user-nav--time-since-update">{lastUpdateText}</Button>
            </OverlayTrigger>
        </>
    );
}

export default TimeSinceUpdate;