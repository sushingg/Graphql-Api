import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
 } from 'graphql'
export default new GraphQLInputObjectType({
  name: 'tagsInput',
  description: 'tags object',
  fields: () => ({
        tag: {
            type: GraphQLString
        }
    })
});
