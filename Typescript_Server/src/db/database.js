/**
 * Created by Shan on 4/11/2018.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("Sequelize");
var jobDefinition_1 = require("./Definitions/jobDefinition");
var databaseConnection = (function () {
    function databaseConnection() {
        this.init();
        this.addDefinitions();
    }
    databaseConnection.prototype.init = function () {
        this.connection = new Sequelize('bap_database', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql',
            define: {
                timestamps: false
            }
        });
    };
    databaseConnection.prototype.addDefinitions = function () {
        this.connection.define('job', jobDefinition_1.default);
    };
    databaseConnection.prototype.test = function () {
        this.connection
            .authenticate()
            .then(function () {
            console.log('Connection has been established successfully.');
        })
            .catch(function (err) {
            console.error('Unable to connect to the database:', err);
        });
    };
    return databaseConnection;
}());
var connection = new databaseConnection();
connection.test();
exports.default = connection.connection;
