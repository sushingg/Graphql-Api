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
  name: 'Category',
  description: 'Category object',
  fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        categorySlug: {
            type: GraphQLString
        },
        categoryTitle: {
            type: GraphQLString
        },
        categoryTags: {
            type: new GraphQLList(tagsType)
        }
    })
});