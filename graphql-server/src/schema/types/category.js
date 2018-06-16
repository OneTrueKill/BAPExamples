/**
 * Created by Shan on 5/31/2018.
 */

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Category',
  description: 'Category type',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(cat){
          return cat.id
        }
      },
      catName: {
        type: GraphQLString,
        resolve(cat){
          return cat.catName
        }
      },
      catDescription: {
        type: GraphQLString,
        resolve(cat){
          return cat.catDescription
        }

      }
    }
  }
})

