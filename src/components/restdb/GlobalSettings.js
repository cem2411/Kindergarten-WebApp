// helper.js
import axios from 'axios';

// REST endpoint
let instance = axios.create({
    baseURL: 'https://kiga2go-359d.restdb.io/',
    timeout: 10000,
    headers: { 
        "content-type": "application/json",
        "x-apikey": "5dd38bc54658275ac9dc1b94",
        "cache-control": "no-cache" 
    }
});


export default instance;
