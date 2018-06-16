/**
 * Created by Shan on 5/9/2018.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("Sequelize");
exports.default = {
    jobname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    workhours: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pay: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    infoWorkerOnly: {
        type: Sequelize.STRING,
        allowNull: false
    }
};
