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

// Get information on your account

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

// Get Available Loans

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





export const ContactAPI = (e) => {
    console.log("IF YOU SEE THIS, IT WORKS!");
    console.log("This is the variable e: " + e);
}