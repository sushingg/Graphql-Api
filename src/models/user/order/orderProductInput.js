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
import {GraphQLDateTime} from 'graphql-iso-date';
import tagsInput from '../../tag/tagsInput'
import imageInput from '../../image/imageInput'
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLInputObjectType({
  name: 'orderProductInput',
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
        type: new GraphQLList(tagsInput)
    },
    productOptions: {
        type: GraphQLString
    },
    productImage: {
        type: new GraphQLList(imageInput)
    }
})
});
