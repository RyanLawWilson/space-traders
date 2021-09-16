import express from 'express';

// The logic for each route is in the controllers folder and those functions get imported here.
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

// Need to initialize a router to start adding backend routes.
const router = express.Router();

// defines a function that gets run when someone visits that URL.
// All routes will have a request (req) and a response (res).
router.get('/', getPosts);
router.post('/', createPost);
// patch is for updating existing documents.  Need an id to specify which document to update
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

// Export the router so that you can add it to the main express app in index.js.
export default router;