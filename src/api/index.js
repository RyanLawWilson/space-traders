// Use Axios to send requests.  Axios is going to be interacting with the server, sending get and post requests.
import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {
    axios.get(url);
}