import * as api from '../api';

// Action Creators are functions that return an action.  An action is just an object which has a type and payload.
export const getPosts = () => async (dispatch) => {
    // Try to get the data from the api (axios will get or post data from/to DB)
    // Use try-catch because the call could fail and dispatch the data when its ready.
    try {
        console.log(`calling api.fetchPosts...`);

        const { data } = await api.fetchPosts();

        console.log(`Data retreived in getPosts action ▼ ${data}`);

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}