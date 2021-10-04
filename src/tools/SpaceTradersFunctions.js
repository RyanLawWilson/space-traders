import axios from 'axios'; const a = 0; export default a;

// https://api.spacetraders.io/          API
// https://codepen.io/sakri/pen/Iklgx    Large Comment Generator. Change line 217 to '╬' (alt 206).  Change line 164 to change white space character.

/* Failure Responses will generally look like this:
{
    "error": {
        "message": "Username has already been claimed.",
        "code": 40901
    }
}
*/


//...........................................................................
//.....╬╬╬╬╬...........................................................╬╬╬...
//.....╬╬╬╬╬..........................................................╬╬╬╬...
//....╬╬╬╬╬╬..........................................................╬╬╬╬...
//....╬╬╬╬╬╬╬.....╬╬╬╬╬╬....╬╬╬╬╬╬.....╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬..
//...╬╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..
//...╬╬╬╬╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬...
//...╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬.╬╬╬╬..╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬...
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬......╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬...
//..╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬......╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬...
//..╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬.╬╬╬╬..╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬...
//.╬╬╬╬....╬╬╬╬.╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬...
//.╬╬╬╬.....╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬..
//.╬╬╬╬.....╬╬╬╬..╬╬╬╬╬╬....╬╬╬╬╬╬.....╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬..
//...........................................................................


/**
 * Get current player's account information
 * @param {string} token - The token that you get after creating your account. 
 * @returns Promise
 */
export const getAccountInfo = (token) => axios.get('https://api.spacetraders.io/my/account',
    {
        headers: { 'Authorization': token }
    }
);
/* Success Response:
{
    "user": {
        "username": "<<<username>>>",
        "shipCount": 0,
        "structureCount": 0,
        "joinedAt": "2021-09-24T19:14:26.991Z",
        "credits": 0
    }
}
*/


//........................................................................................................
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬............╬╬╬╬........╬╬╬.......╬╬╬╬╬╬╬╬╬...╬╬╬╬.................................
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬............╬╬╬╬.......╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬..╬╬╬╬.................................
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.................╬╬╬╬.......╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.................................
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.....╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬...╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬..╬╬╬╬....╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬.......
//.╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬........╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬........╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬......╬╬╬╬..
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬........╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....╬╬╬╬........╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....╬╬╬╬........╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬....
//............................╬╬╬╬........................................................................
//.....................╬╬╬╬╬.╬╬╬╬.........................................................................
//......................╬╬╬╬╬╬╬╬╬.........................................................................
//.......................╬╬╬╬╬╬╬..........................................................................
//........................................................................................................


export const getInfoOnExistingFlightPlan = (token, flightPlanId) => axios.get(`https://api.spacetraders.io/my/flight-plans/${flightPlanId}?token=${token}`);
/* Success Response
{
  flightPlan: {
    arrivesAt: '2021-03-28T23:11:50.068Z',
    createdAt: '2021-03-28T23:05:05.078Z',
    departure: 'OE-PM-TR',
    destination: 'OE-CR',
    distance: 46,
    fuelConsumed: 13,
    fuelRemaining: 67,
    id: 'ckmtrssae0402zgopsy39y9z7',
    shipId: 'ckmtrlqpz0109zgopkeqs4m5s',
    terminatedAt: null,
    timeRemainingInSeconds: 365
  }
}
*/

export const createFlightPlan = (token, shipId, destination) => axios.post(`https://api.spacetraders.io/my/flight-plans?token=${token}&shipId=${shipId}&destination=${destination}`);
/* Success Response:
{
    "flightPlan": {
        "arrivesAt": "2021-05-13T18:41:24.963Z",
        "createdAt": "2021-05-13T18:40:23.003Z",
        "departure": "OE-PM-TR",
        "destination": "OE-PM",
        "distance": 1,
        "fuelConsumed": 1,
        "fuelRemaining": 18,
        "id": "ckon8lk9m005354nz12qjbucx",
        "shipId": "ckon84fo20196vinzktdlvdlv",
        "terminatedAt": null,
        "timeRemainingInSeconds": 61
    }
}
*/


//.....................................................
//.....╬╬╬╬╬╬╬.........................................
//...╬╬╬╬╬╬╬╬╬╬........................................
//..╬╬╬╬╬╬╬╬╬╬╬╬.......................................
//..╬╬╬╬╬..╬╬╬╬╬...╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬....
//.╬╬╬╬╬....╬╬╬...╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...
//.╬╬╬╬..........╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬...
//.╬╬╬╬..╬╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//.╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬..
//.╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬..
//..╬╬╬╬╬....╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬........
//..╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//...╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...
//.....╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬....
//.....................................................


export const isGameAlive = () => axios.get('https://api.spacetraders.io/game/status');
/* Success Response:
{
    "status": "spacetraders is currently online and available to play"
}
*/


//...............................................................................................................
//.╬╬╬╬.................................╬╬╬╬.................╬╬╬╬..........................................╬╬╬╬..
//.╬╬╬╬.................................╬╬╬╬.................╬╬╬╬..........................................╬╬╬╬..
//.╬╬╬╬.................................╬╬╬╬.................╬╬╬╬..........................................╬╬╬╬..
//.╬╬╬╬........╬╬╬╬╬╬....╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬....╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..
//.╬╬╬╬.......╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..
//.╬╬╬╬......╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬..
//.╬╬╬╬......╬╬╬╬..╬╬╬╬....╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬....╬╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬..
//.╬╬╬╬......╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬..
//.╬╬╬╬......╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬..
//.╬╬╬╬......╬╬╬╬......╬╬╬╬.╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬......╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬...╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬╬╬╬..
//...............................................................................................................


export const leaderboard = (token) => axios.get(`https://api.spacetraders.io/game/leaderboard/net-worth?token=${token}`);
/* Success Resposne:
{
    "netWorth": [
        {
            "netWorth": 80000,
            "rank": 1,
            "username": "username1"
        },
        {
            "netWorth": 5600,
            "rank": 2,
            "username": "username2"
        },
        {
            "netWorth": -2000,
            "rank": 3,
            "username": "username3"
        }
    ],
    "userNetWorth": [
        {
            "netWorth": -2000,
            "rank": 3,
            "username": "username3"
        }
    ]
}
*/


//.......................................................
//.╬╬╬╬..................................................
//.╬╬╬╬..................................................
//.╬╬╬╬..................................................
//.╬╬╬╬.........╬╬╬╬╬╬....╬╬╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬.......╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬...
//.╬╬╬╬......╬╬╬╬...╬╬╬╬....╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬.......
//.╬╬╬╬......╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬......╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬....
//.......................................................


export const getCurrentLoans = (token) => axios.put('https://api.spacetraders.io/my/loans/', { headers: { 'Authorization': token } });
/* Success Response:
{
    "loans": [
        {
            "due": "2021-05-15T02:32:43.269Z",
            "id": "ckoma153c0060zbnzquw2xa29",
            "repaymentAmount": 280000,
            "status": "CURRENT",
            "type": "STARTUP"
        }
    ]
}
*/

export const payOffLoan = (token, loanId) => axios.put('https://api.spacetraders.io/my/loans?', { headers: { 'Authorization': token }, params: { loanId: loanId } });
/* Success Response:
{
    "credits": 0,
    "loans": [
        {
            "due": "2021-05-15T02:32:43.269Z",
            "id": "ckoma153c0060zbnzquw2xa29",
            "repaymentAmount": 280000,
            "status": "PAID",
            "type": "STARTUP"
        }
    ]
}
*/

export const takeOutLoan = (token, type) => axios.post(`https://api.spacetraders.io/my/loans?token=${token}&type=${type}`);
/* Success Response:
{
    "credits": 200000,
    "loan": {
        "due": "2021-05-15T02:32:43.269Z",
        "id": "ckoma153c0060zbnzquw2xa29",
        "repaymentAmount": 280000,
        "status": "CURRENT",
        "type": "STARTUP"
    }
}
*/


//.......................................................................................
//.╬╬╬╬.......................................╬╬╬..╬╬╬╬..................................
//.╬╬╬╬......................................╬╬╬╬..╬╬╬╬..................................
//.╬╬╬╬......................................╬╬╬╬........................................
//.╬╬╬╬.........╬╬╬╬╬╬....╬╬╬╬╬╬....╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬.......╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬.......╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬...
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬.....╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬.......
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬.......╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬......╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬......╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬..╬╬╬╬......╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬....╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬....
//.......................................................................................


export const getInfoOnLocation = (token, locationSymbol) => axios.get(`https://api.spacetraders.io/locations/${locationSymbol}?token=${token}`);
/* Success Response:
{
  "location": {
    "allowsConstruction": false,
    "dockedShips": 1,
    "name": "Planet II",
    "symbol": "PL-II,
    "type": "PLANET",
    "x": 4,
    "y": -12
  }
}
*/

export const getInfoOnLocationMarketplace = (token, locationSymbol) => axios.get(`https://api.spacetraders.io/locations/${locationSymbol}/marketplace?token=${token}`);
/* Success Response:
{
    "marketplace": [
        {
            "pricePerUnit": 150,
            "purchasePricePerUnit": 153,
            "quantityAvailable": 11860,
            "sellPricePerUnit": 147,
            "spread": 3,
            "symbol": "BIOMETRIC_FIREARMS",
            "volumePerUnit": 1
        },
        {
            "pricePerUnit": 35,
            "purchasePricePerUnit": 36,
            "quantityAvailable": 27120,
            "sellPricePerUnit": 34,
            "spread": 1,
            "symbol": "DRONES",
            "volumePerUnit": 1
        }
    ]
}
*/

export const getListOfShipsAtLocation = (token, locationSymbol) => axios.get(`https://api.spacetraders.io/locations/${locationSymbol}/ships?token=${token}`);
/* Success Response:
{
    "ships": [
        {
            "shipId": "ckomaazzi00236jnz9d4088kf",
            "shipType": "JW-MK-I",
            "username": "testuser0"
        },
        {
            "shipId": "ckon84fo20196vinzktdlvdlv",
            "shipType": "JW-MK-I",
            "username": "testuser1"
        }
    ]
}
*/


//...................................................................................................................................................
//.╬╬╬╬╬╬╬╬╬................................╬╬╬╬............................................╬╬╬╬╬╬╬..................╬╬╬╬.............................
//.╬╬╬╬╬╬╬╬╬╬...............................╬╬╬╬...........................................╬╬╬╬╬╬╬╬╬╬................╬╬╬╬.............................
//.╬╬╬╬╬╬╬╬╬╬╬..............................╬╬╬╬..........................................╬╬╬╬╬╬╬╬╬╬╬╬...............╬╬╬╬.............................
//.╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬...╬╬╬╬╬╬╬╬....╬╬╬╬╬╬...╬╬╬╬╬╬╬....╬╬╬╬╬╬........╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....
//.╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬......╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬......╬╬╬╬......╬╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬..╬╬╬╬.╬╬╬╬...
//.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬...╬╬╬╬..╬╬╬..╬╬╬╬..╬╬╬╬....╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬..╬╬╬╬.....╬╬╬╬......╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬╬.......
//.╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬...╬╬╬╬.......╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬......╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬.....
//.╬╬╬╬.......╬╬╬╬..╬╬╬╬.╬╬╬╬╬...╬╬╬╬.......╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬....╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬╬...
//.╬╬╬╬.......╬╬╬╬..╬╬╬╬.╬╬╬╬╬...╬╬╬╬..╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬......╬╬╬╬╬╬╬╬............╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬......╬╬╬╬.........╬╬╬╬..
//.╬╬╬╬.......╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬...╬╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬......╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬..
//.╬╬╬╬........╬╬╬╬╬╬╬╬╬.╬╬╬╬╬....╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬........╬╬╬╬╬╬╬╬╬╬..╬╬╬╬....╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬.........╬╬╬╬╬╬╬╬.╬╬╬╬╬.....╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬....╬╬╬╬╬╬...........╬╬╬╬╬╬....╬╬╬╬.....╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬.....╬╬╬╬╬╬....
//...................................................................................................................................................


export const createPurchaseOrder = (token, shipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/purchase-orders?token=${token}`, { params: { shipId, good, quantity } });
/* Success Response:
{
    "credits": 157675,
    "order": {
        "good": "FUEL",
        "pricePerUnit": 3,
        "quantity": 5,
        "total": 15
    },
    "ship": {
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 23,
                "totalVolume": 23
            }
        ],
        "class": "MK-I",
        "id": "ckon84fo20196vinzktdlvdlv",
        "location": "OE-PM-TR",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 27,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": 21,
        "y": -24
    }
}
*/


//...............................................................................................·...
//...╬╬╬╬╬╬╬..............╬╬╬╬.╬╬╬╬........╬╬╬╬╬╬╬..................╬╬╬╬.............................
//..╬╬╬╬╬╬╬╬╬.............╬╬╬╬.╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬................╬╬╬╬.............................
//..╬╬╬╬╬╬╬╬╬╬............╬╬╬╬.╬╬╬╬......╬╬╬╬╬╬╬╬╬╬╬╬...............╬╬╬╬.............................
//.╬╬╬╬╬..╬╬╬╬...╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬......╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....
//.╬╬╬╬╬........╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬.....╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...
//..╬╬╬╬╬╬╬....╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.....╬╬╬╬......╬╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬..╬╬╬╬.╬╬╬╬...
//...╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬.....╬╬╬╬......╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬╬.......
//.....╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.....╬╬╬╬......╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬.....
//........╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.....╬╬╬╬╬....╬╬╬╬╬╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬╬...
//.╬╬╬╬....╬╬╬╬╬╬╬╬.......╬╬╬╬.╬╬╬╬......╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬╬......╬╬╬╬.........╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬......╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬.......╬╬╬╬╬╬╬╬╬╬..╬╬╬╬....╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬╬╬╬....╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬.........╬╬╬╬╬╬....╬╬╬╬.....╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬.....╬╬╬╬╬╬....
//...................................................................................................


export const createSellOrder = (token, shipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/sell-orders?token=${token}`, { params: { shipId, good, quantity } });
/* Success Response:
{
    "credits": 157680,
    "order": {
        "good": "FUEL",
        "pricePerUnit": 1,
        "quantity": 5,
        "total": 5
    },
    "ship": {
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 18,
                "totalVolume": 18
            }
        ],
        "class": "MK-I",
        "id": "ckon84fo20196vinzktdlvdlv",
        "location": "OE-PM-TR",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 32,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": 21,
        "y": -24
    }
}
*/


//....................................................
//...╬╬╬╬╬╬╬....╬╬╬╬.......╬╬╬╬.......................
//..╬╬╬╬╬╬╬╬╬...╬╬╬╬.......╬╬╬╬.......................
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..................................
//.╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬╬........╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//..╬╬╬╬╬╬╬.....╬╬╬╬.╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬...
//...╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬.......
//.....╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬.....
//........╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬....╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬...╬╬╬╬......╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬....
//.............................╬╬╬╬...................
//.............................╬╬╬╬...................
//.............................╬╬╬╬...................
//.............................╬╬╬╬...................
//....................................................

export const buyShip = (token, location, type) => axios.post(`https://api.spacetraders.io/my/ships?token=${token}&location=${location}&type=${type}`);
/* Succuss Respose:
{
    "credits": 178875,
    "ship": {
        "cargo": [],
        "class": "MK-I",
        "id": "ckno9324k0079iiop71j5nrob",
        "location": "OE-PM-TR",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 50,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": 21,
        "y": -24
    }
}
*/

export const getShipInfo = (token, shipId) => axios.get(`https://api.spacetraders.io/my/ships/${shipId}?token=${token}`);
/* Success Response:

*/

export const getMyShips = (token) => axios.get(`https://api.spacetraders.io/my/ships?token=${token}`);
/* Success Response:
{
    "ships": [
        {
            "cargo": [],
            "class": "MK-I",
            "flightPlanId": "ckon8lk9m005354nz12qjbucx",
            "id": "ckon84fo20196vinzktdlvdlv",
            "location": "OE-PM-TR",
            "manufacturer": "Jackshaw",
            "maxCargo": 50,
            "plating": 5,
            "spaceAvailable": 32,
            "speed": 1,
            "type": "JW-MK-I",
            "weapons": 5,
            "x": 21,
            "y": -24
        },
        {
            "cargo": [],
            "class": "MK-I",
            "id": "ckon8tmxu00239unzl5embmcu",
            "location": "OE-PM-TR",
            "manufacturer": "Jackshaw",
            "maxCargo": 50,
            "plating": 5,
            "spaceAvailable": 50,
            "speed": 1,
            "type": "JW-MK-I",
            "weapons": 5,
            "x": 21,
            "y": -24
        }
    ]
}
*/

export const jettisonCargo = (token, shipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/ships/${shipId}/jettison?token=${token}&good=${good}&quantity=${quantity}`);
/* Success Response:
{
    "good": "FUEL",
    "quantityRemaining": 17,
    "shipId": "ckomaazzi00236jnz9d4088kf"
}
*/

export const scrapShip = (token, shipId) => axios.delete(`https://api.spacetraders.io/my/ships/${shipId}/?token=${token}`);
/* Success Response:
{
    "success": "Ship scrapped for 5282 credits"
}
*/

export const transferGoodsBetweenShips = (token, fromShipId, toShipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/ships/${fromShipId}/transfer?token=${token}`, { params: { toShipId, good, quantity } });
/* Success Response:
{
    "fromShip": {
        "id": "ckn85whu00091r5opkrb5qpzh",
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 18,
                "totalVolume": 18
            }
        ],
        "spaceAvailable": 32,
        "type": "JW-MK-I",
        "class": "MK-I",
        "maxCargo": 50,
        "speed": 1,
        "manufacturer": "Jackshaw",
        "plating": 5,
        "weapons": 5
    },
    "toShip": {
        "id": "ckn85wijo0137r5opxjqxyxmp",
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 2,
                "totalVolume": 2
            }
        ],
        "spaceAvailable": 48,
        "type": "JW-MK-I",
        "class": "MK-I",
        "maxCargo": 50,
        "speed": 1,
        "manufacturer": "Jackshaw",
        "plating": 5,
        "weapons": 5
    }
}
*/


//.............................................................................................
//...╬╬╬╬╬╬╬.....╬╬╬...............................╬╬╬.........................................
//..╬╬╬╬╬╬╬╬╬...╬╬╬╬..............................╬╬╬╬.........................................
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..............................╬╬╬╬.........................................
//.╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬..╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬╬......╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//..╬╬╬╬╬╬╬.....╬╬╬╬.╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬...
//...╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬╬.......
//.....╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬╬.......╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬.....
//........╬╬╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬╬.......╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬....╬╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬╬...╬╬╬╬............╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬...╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬....╬╬╬╬╬╬....
//.............................................................................................


export const createStructure = (token, location, type) => axios.post(`https://api.spacetraders.io/my/structures?token=${token}&location=${location}&type=${type}`);
/* Success Response
{
    "structure": {
        "active": false,
        "consumes": [
            "DRONES",
            "MACHINERY"
        ],
        "id": "ckon8d0j400291vnzmgwahsyz",
        "inventory": [
            {
                "good": "FOOD",
                "quantity": 0
            },
            {
                "good": "DRONES",
                "quantity": 0
            },
            {
                "good": "MACHINERY",
                "quantity": 0
            }
        ],
        "location": "OE-PM",
        "ownedBy": {
            "username": "testuser0"
        },
        "produces": [
            "FOOD"
        ],
        "status": "Production halted. Required inventory is missing.",
        "type": "FARM"
    }
}
*/

export const depositGoodsToStructureYouOwn = (token, structureId, shipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/structures/${structureId}/deposit?token=${token}&shipId=${shipId}&good=${good}&quantity=${quantity}`);
/* Success Response:
{
    "deposit": {
        "good": "DRONES",
        "quantity": 10
    },
    "ship": {
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 19,
                "totalVolume": 19
            }
        ],
        "class": "MK-I",
        "id": "ckomaazzi00236jnz9d4088kf",
        "location": "OE-PM",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 31,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": 20,
        "y": -25
    },
    "structure": {
        "active": false,
        "consumes": [
            "DRONES",
            "MACHINERY"
        ],
        "id": "ckon8d0j400291vnzmgwahsyz",
        "inventory": [
            {
                "good": "FOOD",
                "quantity": 0
            },
            {
                "good": "MACHINERY",
                "quantity": 0
            },
            {
                "good": "DRONES",
                "quantity": 10
            }
        ],
        "location": "OE-PM",
        "ownedBy": {
            "username": "testuser0"
        },
        "produces": [
            "FOOD"
        ],
        "status": "Production halted. Required inventory is missing.",
        "type": "FARM"
    }
}
*/

export const depositGoodsToStructure = (token, structureId, shipId, good, quantity) => axios.get(`https://api.spacetraders.io/structures/${structureId}/deposit?token=${token}&shipId=${shipId}&good=${good}&quantity=${quantity}`);
/* Success Resposne
{
    "deposit": {
        "good": "METALS",
        "quantity": 10
    },
    "ship": {
        "cargo": [],
        "class": "MK-I",
        "id": "ckonchfd50072rjnzsqmdijyq",
        "location": "OE-W-XV",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 50,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": -2,
        "y": 145
    },
    "structure": {
        "completed": true,
        "id": "ckonbz97y1650ninzroui51fm",
        "materials": [
            {
                "good": "MACHINERY",
                "quantity": 12000,
                "targetQuantity": 15000
            },
            {
                "good": "CONSTRUCTION_MATERIALS",
                "quantity": 20000,
                "targetQuantity": 25000
            },
            {
                "good": "ELECTRONICS",
                "quantity": 8000,
                "targetQuantity": 10000
            },
            {
                "good": "METALS",
                "quantity": 120010,
                "targetQuantity": 150000
            }
        ],
        "name": "Warp Gate",
        "stability": 0.80005
    }
}
*/

export const getSpecificStructure = (token, structureId) => axios.get(`https://api.spacetraders.io/structures/${structureId}?token=${token}`);
/* Success Response:
{
    "structure": {
        "completed": true,
        "id": "ckonbz97y1650ninzroui51fm",
        "materials": [
            {
                "good": "MACHINERY",
                "quantity": 12000,
                "targetQuantity": 15000
            },
            {
                "good": "CONSTRUCTION_MATERIALS",
                "quantity": 20000,
                "targetQuantity": 25000
            },
            {
                "good": "ELECTRONICS",
                "quantity": 8000,
                "targetQuantity": 10000
            },
            {
                "good": "METALS",
                "quantity": 120000,
                "targetQuantity": 150000
            }
        ],
        "name": "Warp Gate",
        "stability": 0.8
    }
}
*/

export const transferGoodsFromStructureToShip = (token, structureId, shipId, good, quantity) => axios.post(`https://api.spacetraders.io/my/structures/${structureId}/transfer?token=${token}&shipId=${shipId}&good=${good}&quantity=${quantity}`);
/* Success Respose:
{
    "ship": {
        "cargo": [
            {
                "good": "FUEL",
                "quantity": 17,
                "totalVolume": 17
            },
            {
                "good": "FOOD",
                "quantity": 10,
                "totalVolume": 10
            }
        ],
        "class": "MK-I",
        "id": "ckomaazzi00236jnz9d4088kf",
        "location": "OE-PM",
        "manufacturer": "Jackshaw",
        "maxCargo": 50,
        "plating": 5,
        "spaceAvailable": 20,
        "speed": 1,
        "type": "JW-MK-I",
        "weapons": 5,
        "x": 20,
        "y": -25
    },
    "structure": {
        "active": true,
        "consumes": [
            "DRONES",
            "MACHINERY"
        ],
        "id": "ckon8d0j400291vnzmgwahsyz",
        "inventory": [
            {
                "good": "MACHINERY",
                "quantity": 18
            },
            {
                "good": "DRONES",
                "quantity": 15
            },
            {
                "good": "FOOD",
                "quantity": 4
            }
        ],
        "location": "OE-PM",
        "ownedBy": {
            "username": "testuser0"
        },
        "produces": [
            "FOOD"
        ],
        "status": "Production running. Required inventory is available.",
        "type": "FARM"
    },
    "transfer": {
        "good": "FOOD",
        "quantity": 10
    }
}
*/

export const getMySpecificStructure = (token, structureId) => axios.get(`https://api.spacetraders.io/my/structures/${structureId}?token=${token}`);
/* Success Response:
{
    "structure": {
        "active": false,
        "consumes": [
            "DRONES",
            "MACHINERY"
        ],
        "id": "ckon8d0j400291vnzmgwahsyz",
        "inventory": [
            {
                "good": "FOOD",
                "quantity": 0
            },
            {
                "good": "MACHINERY",
                "quantity": 0
            },
            {
                "good": "DRONES",
                "quantity": 10
            }
        ],
        "location": "OE-PM",
        "ownedBy": {
            "username": "testuser0"
        },
        "produces": [
            "FOOD"
        ],
        "status": "Production halted. Required inventory is missing.",
        "type": "FARM"
    }
}
*/

export const getAllMyStructures = (token) => axios.get(`https://api.spacetraders.io/my/structures?token=${token}`);
/* Success Response:
{
    "structures": [
        {
            "active": false,
            "consumes": [
                "DRONES",
                "MACHINERY"
            ],
            "id": "ckon8d0j400291vnzmgwahsyz",
            "inventory": [
                {
                    "good": "FOOD",
                    "quantity": 0
                },
                {
                    "good": "MACHINERY",
                    "quantity": 0
                },
                {
                    "good": "DRONES",
                    "quantity": 10
                }
            ],
            "location": "OE-PM",
            "ownedBy": {
                "username": "testuser0"
            },
            "produces": [
                "FOOD"
            ],
            "status": "Production halted. Required inventory is missing.",
            "type": "FARM"
        },
        {
            "active": false,
            "consumes": [
                "DRONES",
                "MACHINERY"
            ],
            "id": "ckon91tp90059d2nz2q74ds8v",
            "inventory": [
                {
                    "good": "METALS",
                    "quantity": 0
                },
                {
                    "good": "RARE_METALS",
                    "quantity": 0
                },
                {
                    "good": "DRONES",
                    "quantity": 0
                },
                {
                    "good": "MACHINERY",
                    "quantity": 0
                }
            ],
            "location": "OE-NY",
            "ownedBy": {
                "username": "testuser0"
            },
            "produces": [
                "METALS",
                "RARE_METALS"
            ],
            "status": "Production halted. Required inventory is missing.",
            "type": "MINE"
        }
    ]
}
*/


//.............................................................................
//...╬╬╬╬╬╬╬.........................╬╬╬.......................................
//..╬╬╬╬╬╬╬╬╬.......................╬╬╬╬.......................................
//..╬╬╬╬╬╬╬╬╬╬......................╬╬╬╬.......................................
//.╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬╬╬....
//.╬╬╬╬╬.......╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//..╬╬╬╬╬╬╬....╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬...
//...╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬......╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬.......
//.....╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬....╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬.....
//........╬╬╬╬╬.╬╬╬╬╬╬╬....╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬...
//.╬╬╬╬....╬╬╬╬..╬╬╬╬╬╬........╬╬╬╬.╬╬╬╬.╬╬╬╬......╬╬╬╬..╬╬╬╬..╬╬╬╬......╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬╬╬╬...╬╬╬╬╬...╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬╬╬╬.....╬╬╬╬.....╬╬╬╬╬╬...╬╬╬╬╬╬.╬╬╬╬╬╬..╬╬╬╬..╬╬╬╬..╬╬╬╬..╬╬╬╬╬╬....
//................╬╬╬╬.........................................................
//...............╬╬╬╬..........................................................
//.............╬╬╬╬╬╬..........................................................
//.............╬╬╬╬╬...........................................................
//.............................................................................


export const getAllShipsInSystem = (token, systemSymbol) => axios.get(`https://api.spacetraders.io/systems/${systemSymbol}/ship-listings?token=${token}`);
/* Success Response:
{
    "shipListings": [
        {
            "class": "MK-I",
            "manufacturer": "Jackshaw",
            "maxCargo": 50,
            "plating": 5,
            "purchaseLocations": [
                {
                    "location": "OE-PM-TR",
                    "price": 21125,
                    "system": "OE"
                }
            ],
            "speed": 1,
            "type": "JW-MK-I",
            "weapons": 5
        },
        {
            "class": "MK-II",
            "manufacturer": "Zetra",
            "maxCargo": 100,
            "plating": 5,
            "purchaseLocations": [
                {
                    "location": "OE-PM-TR",
                    "price": 72700,
                    "system": "OE"
                },
                {
                    "location": "OE-UC-OB",
                    "price": 72700,
                    "system": "OE"
                }
            ],
            "speed": 2,
            "type": "ZA-MK-II",
            "weapons": 5
        }
    ]
}
*/

export const getAllFlightPlansInSystem = (token, systemSymbol) => axios.get(`https://api.spacetraders.io/systems/${systemSymbol}/flight-plans?token=${token}`);
/* Success Response:
{
  flightPlans: [
    {
      arrivesAt: '2021-03-28T23:11:50.068Z',
      createdAt: '2021-03-28T23:05:05.078Z',
      departure: 'OE-PM-TR',
      destination: 'OE-CR',
      id: 'ckmtrssae0402zgopsy39y9z7',
      shipId: 'ckmtrlqpz0109zgopkeqs4m5s',
      shipType: 'JW-MK-I',
      username: 'testuser0'
    },
    {
      arrivesAt: '2021-03-28T23:07:04.806Z',
      createdAt: '2021-03-28T23:05:34.815Z',
      departure: 'OE-PM-TR',
      destination: 'OE-PM',
      id: 'ckmtrtf8e0455zgopngortmar',
      shipId: 'ckmtrm2zj0154zgopcs4r7hmp',
      shipType: 'JW-MK-I',
      username: 'testuser1'
    }
  ]
}
*/

export const getInfoOnDockedShipsInSystem = (token, systemSymbol) => axios.get(`https://api.spacetraders.io/systems/${systemSymbol}/ships?token=${token}`);
/* Success Response
{
    "ships": [
        {
            "shipId": "ckoop2ce600491bnzi76xs2eb",
            "shipType": "JW-MK-I",
            "username": "testuser0"
        }
    ]
}
*/

export const getLocationInfoForSystem = (token, systemSymbol) => axios.get(`https://api.spacetraders.io/systems/${systemSymbol}/locations?token=${token}`);
/* Success Response
{
    "locations": [
        {
            "allowsConstruction": false,
            "name": "Prime",
            "symbol": "OE-PM",
            "type": "PLANET",
            "x": 20,
            "y": -25
        },
        {
            "allowsConstruction": false,
            "name": "Tritus",
            "symbol": "OE-PM-TR",
            "type": "MOON",
            "x": 21,
            "y": -24
        }
    ]
}
*/

export const getSystemInfo = (token, systemSymbol) => axios.get(`https://api.spacetraders.io/systems/${systemSymbol}?token=${token}`);
/* Success Response:
{
    "system": {
        "name": "Omicron Eridani",
        "symbol": "OE"
    }
}
*/


//....................................................
//.╬╬╬╬╬╬╬╬╬╬╬........................................
//.╬╬╬╬╬╬╬╬╬╬╬........................................
//.╬╬╬╬╬╬╬╬╬╬╬........................................
//....╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬...╬╬╬╬╬╬╬...
//....╬╬╬╬..╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..
//....╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬..
//....╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬......
//....╬╬╬╬...╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....
//....╬╬╬╬...╬╬╬╬╬╬╬..╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬..
//....╬╬╬╬...╬╬╬╬╬╬╬..╬╬╬╬...╬╬╬╬╬╬╬╬...........╬╬╬╬..
//....╬╬╬╬....╬╬╬╬╬╬..╬╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬..
//....╬╬╬╬....╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬..
//....╬╬╬╬....╬╬╬╬╬...╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬....╬╬╬╬╬╬...
//............╬╬╬╬╬...╬╬╬╬............................
//............╬╬╬╬....╬╬╬╬............................
//..........╬╬╬╬╬╬....╬╬╬╬............................
//..........╬╬╬╬╬.....╬╬╬╬............................
//....................................................


export const getAvailableGoods = (token) => axios.get(`https://api.spacetraders.io/types/goods?token=${token}`)
/* Success Response:
{
    "goods": [
        {
            "name": "Fuel",
            "symbol": "FUEL",
            "volumePerUnit": 1
        },
        {
            "name": "Chemicals",
            "symbol": "CHEMICALS",
            "volumePerUnit": 1
        },
        {
            "name": "Metals",
            "symbol": "METALS",
            "volumePerUnit": 1
        }
    ]
}
*/

/**
 * Get a list of all available loans to take out
 * @param {string} token - The current player's token
 * @returns Object that contains {loans} array.  The array contains objects that represent an individual loan that can be taken out.
 */
export const getAvailableLoans = (token) => axios.get(`https://api.spacetraders.io/types/loans?token=${token}`);
/* Success Response:
{
    "loans": [
        {
            "amount": 200000,
            "collateralRequired": false,
            "rate": 40,
            "termInDays": 2,
            "type": "STARTUP"
        }
    ]
}
*/

export const getAvailableStructures = (token) => axios.get(`https://api.spacetraders.io/types/structures?token=${token}`);
/* Success Response:
{
    "structures": [
        {
            "allowedLocationTypes": [
                "MOON",
                "ASTEROID"
            ],
            "consumes": [
                "DRONES",
                "MACHINERY"
            ],
            "name": "Mine",
            "price": 1293550,
            "produces": [
                "METALS",
                "RARE_METALS"
            ],
            "type": "MINE"
        },
        {
            "allowedLocationTypes": [
                "GAS_GIANT"
            ],
            "consumes": [
                "DRONES",
                "MACHINERY",
                "CHEMICALS"
            ],
            "name": "Fuel Refinery",
            "price": 288000,
            "produces": [
                "FUEL"
            ],
            "type": "FUEL_REFINERY"
        }
    ]
}
*/

export const getAvailableShips = (token) => axios.get(`https://api.spacetraders.io/types/ships?token=${token}`);
/* Success Response
{
    "ships": [
        {
            "class": "MK-III",
            "manufacturer": "Zetra",
            "maxCargo": 300,
            "plating": 10,
            "speed": 2,
            "type": "ZA-MK-III",
            "weapons": 10
        },
        {
            "class": "MK-II",
            "manufacturer": "Jackshaw",
            "maxCargo": 100,
            "plating": 10,
            "speed": 2,
            "type": "JW-MK-II",
            "weapons": 10
        },
        {
            "class": "MK-II",
            "manufacturer": "Gravager",
            "maxCargo": 300,
            "plating": 10,
            "speed": 1,
            "type": "GR-MK-II",
            "weapons": 5
        }
    ]
}
*/


//....................................................
//.╬╬╬╬...╬╬╬╬........................................
//.╬╬╬╬...╬╬╬╬........................................
//.╬╬╬╬...╬╬╬╬........................................
//.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬╬....╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬....
//.╬╬╬╬...╬╬╬╬.╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬...
//.╬╬╬╬...╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬.╬╬╬╬╬..╬╬╬╬.╬╬╬╬...
//.╬╬╬╬...╬╬╬╬.╬╬╬╬╬.....╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬╬.......
//.╬╬╬╬...╬╬╬╬..╬╬╬╬╬╬...╬╬╬╬╬╬╬╬╬╬╬╬╬╬....╬╬╬╬╬╬.....
//.╬╬╬╬...╬╬╬╬...╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬.....╬╬╬╬╬╬╬...
//.╬╬╬╬...╬╬╬╬.......╬╬╬╬╬╬╬╬......╬╬╬╬.........╬╬╬╬..
//.╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬..╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬...╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬╬╬.....╬╬╬╬╬╬....╬╬╬╬╬╬..╬╬╬╬.....╬╬╬╬╬╬....
//....................................................


/**
 * Claim a username for the current player and return that player's token if successful.
 * @param {string} username - The player's username they are trying to claim.
 * @returns Object that contains player's {token} and {user} data if successful.  Object that contains {error} object.
 */
export const createAccount = (username) => axios.post(`https://api.spacetraders.io/users/${username}/claim`);
/* Success Response:
{
    "token": "<<<token>>>",
    "user": {
        "username": "<<<username>>>",
        "credits": 0,
        "ships": [],
        "loans": []
    }
}
*/


//....................................................................................................
//.╬╬╬╬..╬╬╬╬╬...╬╬╬╬.....................................╬╬╬╬........................................
//.╬╬╬╬..╬╬╬╬╬..╬╬╬╬......................................╬╬╬╬........................................
//.╬╬╬╬..╬╬╬╬╬╬.╬╬╬╬......................................╬╬╬╬........................................
//.╬╬╬╬.╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.............╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬.╬╬╬╬╬..╬╬╬╬╬╬╬╬....
//.╬╬╬╬.╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬............╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//..╬╬╬╬╬╬╬╬╬╬╬.╬╬╬.╬╬╬..╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬...........╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬.╬╬╬╬╬╬╬....╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬...........╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬.╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬...........╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬.....╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬..
//..╬╬╬╬╬╬╬.╬╬╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬.....╬╬╬╬.╬╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬..
//...╬╬╬╬╬...╬╬╬╬╬.╬╬╬╬.╬╬╬╬╬.╬╬╬╬...╬╬╬╬..╬╬╬╬.....╬╬╬╬╬╬╬╬╬..╬╬╬╬.╬╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬..╬╬╬╬..
//...╬╬╬╬╬...╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬╬.......╬╬╬╬╬╬╬╬..╬╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬╬...
//...╬╬╬╬╬...╬╬╬╬╬..╬╬╬╬╬╬╬╬╬.╬╬╬╬...╬╬╬╬╬╬╬╬.........╬╬╬╬╬╬....╬╬╬╬╬╬╬╬╬.╬╬╬╬.╬╬╬╬..╬╬╬╬.╬╬╬╬╬╬╬╬....
//...................................╬╬╬╬.................................................╬╬╬╬........
//...................................╬╬╬╬.................................................╬╬╬╬........
//...................................╬╬╬╬.................................................╬╬╬╬........
//...................................╬╬╬╬.................................................╬╬╬╬........
//....................................................................................................


export const warpJump = (token, shipId) => axios.post(`https://api.spacetraders.io/my/warp-jumps?token=${token}&shipId=${shipId}`);
/* Successful Response:
{
    "flightPlan": {
        "arrivesAt": "2021-05-13T20:54:59.167Z",
        "createdAt": "2021-05-13T20:52:35.198Z",
        "departure": "OE-W-XV",
        "destination": "XV-W-OE",
        "distance": 0,
        "fuelConsumed": 0,
        "id": "ckondbksd00307xnzhy5yboxj",
        "shipId": "ckonchfd50072rjnzsqmdijyq",
        "terminatedAt": null,
        "timeRemainingInSeconds": 143
    }
}
*/


export const ContactAPI = (e) => {
    console.log("IF YOU SEE THIS, IT WORKS!");
    console.log("This is the variable e: " + e);
}