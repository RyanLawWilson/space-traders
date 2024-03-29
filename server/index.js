import express from 'express';         // A framework for creating routing in the appliation
import bodyParser from 'body-parser';  // Allows us to send post requests | DEPRECATED
import mongoose from 'mongoose';       // Used to create models
import cors from 'cors';               // Enables cross-origin requests
import dotenv from 'dotenv';

// Do 'npm install nodemon' to install nodemon.  Nodemon allows you to make changes to the server while it is running
// and see the changes in real time.

// NOTE: Since this server folder is not part of React, you must indicate the file type at the end of the path ".js"/
// NOTE: The name postRoutes is simply the name that we gave to whatever is being returned from posts.js.  Think of it as a variable.
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// app.use() loads resources, libraries, or middleware functions.
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// This forces every route in postRoutes to start with '/posts'
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to my Space Traders API');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port: ${PORT}`))
    })
    .catch((error) => console.log(error.message));