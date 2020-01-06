"use strict";
const axios = require("../services/GlobalAxiosSettings");
const crypter = require("../security/crypter");

module.exports.registerUser = async function registerUser(req, res, next) {
  let user = req.undefined.value;
  console.log(user);
  user.password = crypter.encrypt(user.password);
  console.log(user);
  axios
    .post("/accounts", user)
    .then(result => {
      console.log("OK!");
      res.send("OK");
    })
    .catch(error => console.log("error"));
};
