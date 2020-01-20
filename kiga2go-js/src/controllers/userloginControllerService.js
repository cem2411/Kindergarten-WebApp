("use strict");
const axios = require("../services/GlobalAxiosSettings");
const crypter = require("../security/crypter");

module.exports.loginUser = async function loginUser(req, res, next) {
  let response = await axios.get("/accounts", {
    // await - wait till axios get is finished
    params: {
      q: { email: req.email.value } // q key for email
    }
  });
  if (response) {
    if (response.data[0]) {
      if (crypter.decrypt(response.data[0].password) === req.password.value) {
        //if (response.data[0].password === req.password.value) {
        res.send({ payload: response.data[0], status: 200 });
      } else {
        res.send({
          payload: `Falsches Passwort für Benutzer ${req.email.value}!`,
          status: 401
        });
      }
    } else {
      res.send({
        payload: `Benutzer ${req.email.value} nicht gefunden!`,
        status: 404
      });
    }
  } else {
    res.send({
      payload: `Connection error while accessing database`,
      status: 301
    });
  }
};
