import {
  GraphQLObjectType,
  GraphQLString
 } from 'graphql'

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'addUserOrderType',
  description: 'addUserOrderType object',
  fields: () => ({
    orderPaymentLink:{
      type: GraphQLString
    }
  })
});
