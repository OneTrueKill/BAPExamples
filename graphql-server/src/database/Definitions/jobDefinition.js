/**
 * Created by Shan on 5/10/2018.
 */

const Sequelize  = require('sequelize')

module.exports =  {
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