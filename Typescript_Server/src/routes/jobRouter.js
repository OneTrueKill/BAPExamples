/**
 * Created by Shan on 5/9/2018.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_1 = require("../db/database");
var JobRouter = (function () {
    function JobRouter() {
        this.router = express_1.Router();
        this.init();
    }
    JobRouter.prototype.init = function () {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    };
    JobRouter.prototype.getAll = function (req, res, next) {
        database_1.default.models.job.findAll({}).then(function (result) { res.json(result); });
    };
    JobRouter.prototype.getOne = function (req, res, next) {
        var param = parseInt(req.params.id);
        database_1.default.models.job.findById(param).then(function (result) { res.json(result); });
    };
    return JobRouter;
}());
exports.JobRouter = JobRouter;
exports.default = new JobRouter();
