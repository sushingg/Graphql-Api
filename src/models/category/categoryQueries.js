import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import categoryType from './categoryType';
import category from './categorySchema';

export default {
    categories: {
        type: new GraphQLList(categoryType),
        resolve: category.getListOfCategories
    },
    category: {
        type: categoryType,
        args: {
            categorySlug: {
                type: GraphQLString
            },
            categoryTitle: {
                type: GraphQLString
            }
        },
        resolve: category.getCategory
    },
    categoryId: {
        type: categoryType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: category.getCategoryById
    }
};