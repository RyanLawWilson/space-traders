import React from 'react';
import { Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';


const TimeSinceUpdate = () => {

    const[lastUpdateSince, setLastUpdatedSince] = useState(0);



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
                <Button variant="secondary" className="user-nav--time-since-update">30 s</Button>
            </OverlayTrigger>
        </>
    );
}

export default TimeSinceUpdate;