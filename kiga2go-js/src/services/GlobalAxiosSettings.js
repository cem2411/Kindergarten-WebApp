// helper.js
const axios = require("axios");

// REST endpoint
module.exports = axios.create({
  baseURL: "https://kiga2go-359d.restdb.io/rest",
  headers: {
    "content-type": "application/json",
    "x-apikey": "5dd38bc54658275ac9dc1b94",
    "cache-control": "no-cache"
  }
});
