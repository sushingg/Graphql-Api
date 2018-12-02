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
  name: 'orderProduct',
  description: 'orderProduct object',
  fields: () => ({
        productSlug: {
            type: GraphQLString
        },
        productTitle: {
            type: GraphQLString
        },
        productPrice: {
            type: GraphQLInt
        },
        productOptions: {
            type: GraphQLString
        },
        quantity: {
            type: GraphQLInt
        }
    })
});