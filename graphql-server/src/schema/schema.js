const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql')

const Db = require('../database/db')
const Job = require(`./types/Job`)
const Category = require(`./types/category`)

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root query',
  fields: () => {
    return {
      Jobs: {
        type: new GraphQLList(Job),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args){
          return Db.models.job.findAll({where: args})
        }
      },
      Categories: {
        type: new GraphQLList(Category),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args){
          return Db.models.categories.findAll({where: args})
        }
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'Creates stuff',
  fields() {
    return {
      addJob: {
        type: Job,
        args: {
          jobname: {
            type: new GraphQLNonNull(GraphQLString),
          },
          date: {
            type: new GraphQLNonNull(GraphQLString),

          },
          workhours: {
            type: new GraphQLNonNull(GraphQLInt),

          },
          pay: {
            type: new GraphQLNonNull(GraphQLInt),

          },
          infoWorkerOnly: {
            type: new GraphQLNonNull(GraphQLString),
          }
        },
        resolve(root, args){
          return Db.models.job.create({
            jobname: args.jobname,
            date: args.date,
            workhours: args.workhours,
            pay: args.pay,
            infoWorkerOnly: args.infoWorkerOnly
          })
        }
      }
    }
  }
})

const Schema = new GraphQLSchema({query: Query, mutation: Mutation})

module.exports = Schema
