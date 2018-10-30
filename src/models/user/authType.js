import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } from 'graphql'
import userType from './userType'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'AuthPayload',
  description: 'AuthPayload object',
  fields: () => ({
    token:{
      type: GraphQLString
    },
    email:{
      type: GraphQLString
    }
  })
});
