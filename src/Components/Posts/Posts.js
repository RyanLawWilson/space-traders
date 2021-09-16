import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';

// To get state from the global redux store, use selectecrs.
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    // Note that the selector knows about state.posts because we defined it in ../reducers/index.js
    const posts = useSelector((state) => state.posts);


    console.log("Posts component has been mounted.  Logging posts state from store ▼");
    console.log(posts);

    {/* If posts have no items just show circle icon, otherwise, show the grid of posts */}
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
                {/* Note that the ' (post) => () ' part means that anything inside of the parenthesis is going to be returned */}
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
