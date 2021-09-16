import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';

// To get state from the global redux store, use selectecrs.
import { useSelector } from 'react-redux';

const Posts = () => {
    // Note that the selector knows about state.posts because we defined it in ../reducers/index.js
    const posts = useSelector((state) => state.posts);


    console.log("Posts component has been mounted.  Logging posts state from store ▼");
    console.log(posts);

    return (
        <>
            
        </>
    )
}

export default Posts
