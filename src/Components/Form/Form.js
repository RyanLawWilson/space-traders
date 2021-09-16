import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {

    const dispatch = useDispatch();

    // Create local state for all the information needed to make a post
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
    }

    const handleClear = () => {

    }

    return (
        <>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <h3>Creating a memory</h3>
                {/* This onChange method is how you change a specific property within on object.  Spread the data first, then specify the property you want to change. */}
                <input type="text" name="creator" placeholder="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <input type="text" name="title" placeholder="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <input type="text" name="message" placeholder="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <input type="text" name="tags" placeholder="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

                <div>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
                </div>

                <input type="submit" value="submit" />
                <input type="button" onClick={handleClear} value="clear form" />
            </form>
            <h1>Form</h1>
        </>
    )
}

export default Form
