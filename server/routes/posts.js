import express from 'express';

// The logic for each route is in the controllers folder and those functions get imported here.
import { getPosts } from '../controllers/posts.js';

// Need to initialize a router to start adding backend routes.
const router = express.Router();

// defines a function that gets run when someone visits that URL.
// All routes will have a request (req) and a response (res).
router.get('/', getPosts);

// Export the router so that you can add it to the main express app in index.js.
export default router;