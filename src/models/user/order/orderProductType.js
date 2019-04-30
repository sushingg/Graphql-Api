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
import tagsType from '../../tag/tagsType'
import imageType from '../../image/imageType'
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'orderProducts',
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
        },
        productDescription: {
            type: GraphQLString
        },
        productTags: {
            type: new GraphQLList(tagsType)
        },
        productOptions: {
            type: GraphQLString
        },
        productImage: {
            type: new GraphQLList(imageType)
        }
    })
});