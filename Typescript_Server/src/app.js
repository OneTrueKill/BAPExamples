/**
 * Created by Shan on 4/10/2018.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var jobRouter_1 = require("./routes/jobRouter");
var ExpressServer = (function () {
    function ExpressServer() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    ExpressServer.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    ExpressServer.prototype.routes = function () {
        var router = express.Router();
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello world!'
            });
        });
        this.express.use('/', router);
        this.express.use('/jobs', jobRouter_1.default.router);
    };
    return ExpressServer;
}());
exports.default = new ExpressServer().express;
