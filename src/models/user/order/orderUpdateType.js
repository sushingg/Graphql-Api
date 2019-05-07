import {
  GraphQLObjectType,
  GraphQLBoolean
 } from 'graphql'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'orderUpdateType',
  description: 'orderUpdateType object',
  fields: () => ({
    success:{
      type: GraphQLBoolean
    }
  })
});
