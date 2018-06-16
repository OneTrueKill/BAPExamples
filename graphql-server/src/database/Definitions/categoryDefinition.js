/**
 * Created by Shan on 5/29/2018.
 */


const Sequelize  = require('sequelize')

module.exports =  {
  catName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  catDescription: {
    type: Sequelize.STRING,
    allowNull: false

  }
}