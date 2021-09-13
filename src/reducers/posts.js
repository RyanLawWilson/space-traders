// A reducer is a function that accepts the state and action.

// The state must allways be equal to something, so set initial value.
// Since this is the only function being exported from this file, naming the function is not necessary.
export default (postsState = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return postsState;
        case "CREATE":
            return postsState;
        default: 
            return postsState;
    }
};