import axios from 'axios';

// https://api.spacetraders.io/

/* Failure Responses will generally look like this:
{
    "error": {
        "message": "Username has already been claimed.",
        "code": 40901
    }
}
*/

// Account

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

// Types

// Get Available Loans

/**
 * Get a list of all available loans to take out
 * @param {string} token - The current player's token 
 * @returns Object that contains {loans} array.  The array contains objects that represent an individual loan that can be taken out.
 */
export const getAvailableLoans = (token) => axios.get('https://api.spacetraders.io/types/loans',
    {
        headers: { 'Authorization': token }
    }
);
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

// Users

// Claim a username and get a token

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




































export const ContactAPI = (e) => {
    console.log("IF YOU SEE THIS, IT WORKS!");
    console.log("This is the variable e: " + e);
}