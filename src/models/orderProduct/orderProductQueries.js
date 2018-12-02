import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import orderType from './orderType';
import order from './orderSchema';

export default {
    orders: {
        type: new GraphQLList(orderType),
        resolve: order.getListOfProducts
    },
    order: {
        type: orderType,
        args: {
            orderPaymentId: {
                type: GraphQLString
            },
            orderEmail: {
                type: GraphQLString
            },
            orderStatus: {
                type: GraphQLString
            }
        },
        resolve: order.getOrder
    },
    orderId: {
        type: orderType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: order.getOrderById
    }
};