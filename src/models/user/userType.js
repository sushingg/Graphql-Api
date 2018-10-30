import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
 } from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date';
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        address1: {
            type: GraphQLString
        },
        address2: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        postcode: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },        
        created: {
            type: GraphQLDateTime
        },
        admin: {
            type: GraphQLBoolean
        }
    })
});