/**
 * Created by Shan on 4/25/2018.
 */
const Sequelize = require('sequelize')

const jobDefinition = require(`./Definitions/jobDefinition`)
const categoryDefinition = require('./Definitions/categoryDefinition')
const dataBaseOptions = require('./options/dataBaseOptions')

const conn = new Sequelize('bap_database', 'root', 'root', dataBaseOptions)

conn.authenticate().then(() => {
  console.log('connected with db')
}).catch(err => {
  console.log('could not connect to db: ', err)
})

var Job = conn.define('job', jobDefinition)
var Cat = conn.define('categories', categoryDefinition)

Cat.belongsToMany(Job, {
  through: 'category_jobs',
  foreignKey: 'catId',
});

Job.belongsToMany(Cat, {
  through: 'category_jobs',
  foreignKey: 'jobId'
})


module.exports = conn