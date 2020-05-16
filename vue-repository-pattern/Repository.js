import axios from "axios"

const SERVER_URL = 'http://localhost:9499';

// Create the axios object
const repo = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000   
});

repo.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// Add the auth header if it exists
repo.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('s_id');

        if (token) {
            config.headers['X-Authorization'] = token;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default repo;
