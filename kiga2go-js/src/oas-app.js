"use strict";

const app = require("./app");
const path = require("path");
const oasTools = require("oas-tools");
const http = require("http");
const oasDoc = require("./api/oas-doc");
const serverPort = process.env.PORT || 5000;
const loglevel = process.env.OAS_LOGLEVEL || "warning";
let options_object = {
  controllers: path.join(__dirname, "./controllers"),
  loglevel: loglevel,
  strict: false,
  router: true,
  validator: true
};
oasTools.configure(options_object);
oasTools.initialize(oasDoc, app, function() {
  http.createServer(app).listen(serverPort, function() {
    console.log("App running at http://localhost:" + serverPort);
    console.log("______________________");
    if (options_object.docs !== false) {
      console.log(
        "API docs (Swagger UI) available on http://localhost:" +
          serverPort +
          "/docs"
      );
      console.log("______________________");
    }
  });
});
