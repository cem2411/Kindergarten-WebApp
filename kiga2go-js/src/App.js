"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const httpLogFormat =
  process.env.LOGFORMAT ||
  ":date[iso] - remote: [:remote-addr - :remote-user] - :method :url [:status] :response-time ms";
const errorOptions = {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: process.stderr
};
const loggingOptions = {
  skip: function(req, res) {
    return res.statusCode >= 400;
  },
  stream: process.stdout
};

const app = express();
app.use(cors());
app.use(bodyParser.json({ strict: false }));

module.exports = app;
