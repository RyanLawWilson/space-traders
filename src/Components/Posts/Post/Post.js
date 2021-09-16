import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();


    return (
        <div className="post" style={{border: "2px solid blue", margin: "10px", backgroundColor: "white"}}>
            <img src={post.selectedFile} title={post.title} alt='stuff' />
            <p>{post.creator} posted {moment(post.createdAt).fromNow()}</p>
            <button onClick={() => setCurrentId(post._id)}>Edit</button>
            <p>Tags: {post.tags.map((tag) => `#${tag} `)}</p>
            <p style={{color: "pink"}}>{post.message}</p>
            <button onClick={() => dispatch(likePost(post._id))}>Like {post.likeCount}</button>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
        </div>
    )
}

export default Post
