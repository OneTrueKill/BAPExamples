/**
 * Created by Shan on 4/10/2018.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("./app");
var port = process.env.PORT || 3000;
var server = http.createServer(app_1.default);
server.listen(port);
server.on('listening', function () {
    console.log("Listening on port: ", port);
});
server.on('error', function (err) {
    console.log("Server error: ", err);
});
