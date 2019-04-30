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
  name: 'image',
  description: 'image object',
  fields: () => ({
        altText: {
            type: GraphQLString
        },
        name:{
          type: GraphQLString
        }
    })
});