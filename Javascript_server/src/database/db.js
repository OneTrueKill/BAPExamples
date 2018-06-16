/**
 * Created by Shan on 4/25/2018.
 */
const Sequelize = require('sequelize')

const jobDefinition = require(`./Definitions/jobDefinition`)
const categoryDefinition = require(`./Definitions/categoryDefinition`)


const conn = new Sequelize('bap_database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

conn.authenticate().then(() => {
  console.log('connected with db')
}).catch(err => {
  console.log('could not connect to db: ', err)
})

var job = conn.define('job', jobDefinition)
var cat = conn.define('categories', categoryDefinition)

cat.belongsToMany(job, {
  through: 'category_jobs',
  foreignKey: 'catId',
});

job.belongsToMany(cat, {
  through: 'category_jobs',
  foreignKey: 'jobId'
})


module.exports = {
  "connection" : conn,
  "job": job,
  "cat": cat
}