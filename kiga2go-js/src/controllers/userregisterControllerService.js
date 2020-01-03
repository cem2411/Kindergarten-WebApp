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

  /*let response = await axios.get("/accounts", {
    params: {
      q: { email: req.email.value }
    }
  });
  if (response) {
    if (response.data[0]) {
      if (response.data[0].password === req.password.value) {
        res.send({payload: response.data[0], status:200});
      } else {
        res.send({payload: `Wrong password for user ${req.email.value}!`, status:401});
      }
    } else {
      res.send({payload: `User ${req.email.value} not found!`, status:404});
    }
  } else {
    res.send({payload: `Connection error while accessing database`, status:301});
  }*/
};
