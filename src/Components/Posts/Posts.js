import React from 'react';
import Post from './Post/Post';

// To get state from the global redux store, use selectecrs.
import { useSelector } from 'react-redux';

const Posts = () => {
    // Note that the selector knows about state.posts because we defined it in ../reducers/index.js
    const posts = useSelector((state) => state.posts);


    console.log("Posts component has been mounted.  Logging posts state in store ▼");
    console.log(posts);

    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    )
}

export default Posts
