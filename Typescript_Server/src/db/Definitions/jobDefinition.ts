/**
 * Created by Shan on 5/9/2018.
 */

import * as Sequelize from "Sequelize";

export default {
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
}
