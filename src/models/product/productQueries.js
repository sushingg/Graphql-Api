import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import productType from './productType';
import product from './productSchema';

export default {
    products: {
        type: new GraphQLList(productType),
        resolve: product.getListOfProducts
    },
    product: {
        type: productType,
        args: {
            productSlug: {
                type: GraphQLString
            },
            productTitle: {
                type: GraphQLString
            },
            productPrice: {
                type: GraphQLInt
            }
        },
        resolve: product.getProduct
    },
    productId: {
        type: productType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: product.getProductById
    }
};