// A reducer is a function that accepts the state and action.

// The state must always be equal to something, so set initial value.
// Since this is the only function being exported from this file, naming the function is not necessary.
const reducer = (postsState = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...postsState, action.payload];
        case "UPDATE":
            // Go through each post and find the post that has the same id as the post that was updated on the server.  Replace that post with the updated post.
            return postsState.map((post) => post._id === action.payload ? action.payload : post);
        case "DELETE":
            // Show all of the posts that are not equal to the post we just deleted
            return postsState.filter((post) => post._id !== action.payload);
        default: 
            return postsState;
    }
};

export default reducer;