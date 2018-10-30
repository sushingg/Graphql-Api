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
import productType from './productType';
import product from './productSchema';
export default {
    addProduct: {
        type: productType,
        args: {
            productSlug: {
				name: 'Slug',
                type: new GraphQLNonNull(GraphQLString)
            },
            productTitle: {
				name: 'Title',
                type: new GraphQLNonNull(GraphQLString)
            },
            productPrice: {
				name: 'Price',
                type: new GraphQLNonNull(GraphQLInt)
            },
            productDescription: {
				name: 'Description',
                type: GraphQLString
            },
            productPublished: {
				name: 'Published',
                type: GraphQLString
            },
            productTags: {
				name: 'Tags',
                type: GraphQLString
            },
            productOptions: {
				name: 'Options',
                type: GraphQLString
            },
            productImage: {
				name: 'Image',
                type: GraphQLString
            }
        },
        resolve: product.addProduct
    },
    updateProduct: {
        type: productType,
        args: {
			id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            productSlug: {
				name: 'productSlug',
                type:  GraphQLString
            },
            productTitle: {
				name: 'productTitle',
                type: GraphQLString
            },
            productPrice: {
				name: 'productPrice',
                type: GraphQLString
            },
            productDescription: {
				name: 'productDescription',
                type: GraphQLString
            },
            productPublished: {
				name: 'productPublished',
                type: GraphQLString
            },
            productTags: {
				name: 'productTags',
                type: GraphQLString
            },
            productOptions: {
				name: 'productOptions',
                type: GraphQLString
            },
            productImage: {
				name: 'productImage',
                type: GraphQLString
            }
        },
        resolve: product.updateProduct
    }
};
