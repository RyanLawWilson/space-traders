import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);


    useEffect(() => {
        // This code goes to the posts reducer.
        dispatch(getPosts());

    }, [dispatch, currentId]);

    return (
        <>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Posts setCurrentId={setCurrentId} />
        </>
    )
}

export default Home
