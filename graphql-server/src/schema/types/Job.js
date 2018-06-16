/**
 * Created by Shan on 4/26/2018.
 */

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const category = require("./category")


module.exports = new GraphQLObjectType({
  name: 'Job',
  description: 'Job type',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(job){
          return job.id
        }
      },
      jobname: {
        type: GraphQLString,
        resolve(job){
          return job.jobname
        }
      },
      date: {
        type: GraphQLString,
        resolve(job){
          return job.date
        }
      },
      workhours: {
        type: GraphQLInt,
        resolve(job){
          return job.workhours
        }
      },
      pay: {
        type: GraphQLInt,
        resolve(job){
          return job.pay
        }
      },
      infoWorkerOnly : {
        type: GraphQLString,
        resolve(job){
          return job.infoWorkerOnly
        }
      },
      categories: {
        type: new GraphQLList(category),
        resolve(job){
          return job.getCategories()
        }
      }
    }
  }
})

