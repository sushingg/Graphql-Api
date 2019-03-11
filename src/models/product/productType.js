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
import tagsType from '../tag/tagsType';
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        productSlug: {
            type: GraphQLString
        },
        productTitle: {
            type: GraphQLString
        },
        productPrice: {
            type: GraphQLInt
        },
        productDescription: {
            type: GraphQLString
        },
        productPublished: {
            type: GraphQLString
        },
        productTags: {
            type: new GraphQLList(tagsType)
        },
        productOptions: {
            type: GraphQLString
        },
        productAddedDate: {
            type: GraphQLDateTime
        },
        productImage: {
            type: GraphQLString
        }
    })
});