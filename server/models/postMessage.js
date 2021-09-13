// Add models with Mongoose

import mongoose from 'mongoose';

// A schema is a blueprint/type for a model.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Create the model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;