import * as api from '../api';

// Action Creators are functions that return an action.  An action is just an object which has a type and payload.
const getPosts = () => async (dispatch) => {
    const action = { type: "FETCH_ALL", payload: [] };

    dispatch(action);
}