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
export default new GraphQLObjectType({
  name: 'tags',
  description: 'tags object',
  fields: () => ({
        tag: {
            type: GraphQLString
        }
    })
});