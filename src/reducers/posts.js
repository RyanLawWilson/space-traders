// A reducer is a function that accepts the state and action.

// The state must always be equal to something, so set initial value.
// Since this is the only function being exported from this file, naming the function is not necessary.
const reducer = (postsState = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...postsState, action.payload];
        default: 
            return postsState;
    }
};

export default reducer;