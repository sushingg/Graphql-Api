import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
  } from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import tagsInput from './tagsInput';
import categoryType from './categoryType';
import category from './categorySchema';
export default {
    addCategory: {
        type: categoryType,
        args: {
            categorySlug: {
				name: 'Slug',
                type: new GraphQLNonNull(GraphQLString)
            },
            categoryTitle: {
				name: 'Title',
                type: new GraphQLNonNull(GraphQLString)
            },
            categoryTags: {
                type: new GraphQLList(tagsInput)
            }
        },
        resolve: category.addCategory
    },
    updateCategory: {
        type: categoryType,
        args: {
			id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            categorySlug: {
				name: 'categorySlug',
                type:  GraphQLString
            },
            categoryTitle: {
				name: 'categoryTitle',
                type: GraphQLString
            },
            categoryTags: {
                type: tagsInput
            }
        },
        resolve: category.updateCategory
    }
};
