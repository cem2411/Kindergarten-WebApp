"use strict";

var varuserregisterController = require("./userregisterControllerService");

module.exports.registerUser = function registerUser(req, res, next) {
  varuserregisterController.registerUser(req.swagger.params, res, next);
};
