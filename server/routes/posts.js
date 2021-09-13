import express from 'express';

// Need to initialize a router to start adding backend routes.
const router = express.Router();

// defines a function that gets run when someone visits that URL.
// All routes will have a request (req) and a response (res).
router.get('/', (req, res) => {
    res.send("This workds!");
});

// Export the router so that you can add it to the main express app in index.js.
export default router;