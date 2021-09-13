// All of the handlers for the routes should go here.

// Import the model in the controllers file
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = PostMessage.find();
        
        res.status(200).json(await postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = (req, res) => {
    res.send("Post Creation!");
};