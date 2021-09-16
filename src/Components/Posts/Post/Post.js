import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {
    return (
        <div className="post" style={{border: "2px solid blue", margin: "10px", backgroundColor: "white"}}>
            <img src={post.selectedFile} title={post.title} />
            <p>{post.creator} posted {moment(post.createdAt).fromNow()}</p>
            <button onClick={() => {}}>Edit</button>
            <p>Tags: {post.tags.map((tag) => `#${tag} `)}</p>
            <p style={{color: "pink"}}>{post.message}</p>
            <button onClick={() => {}}>Like {post.likeCount}</button>
            <button onClick={() => {}}>Delete</button>
        </div>
    )
}

export default Post
