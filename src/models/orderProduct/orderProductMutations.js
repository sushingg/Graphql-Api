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
import orderType from './orderType';
import order from './orderSchema';
export default {
    addOrder: {
        type: orderType,
        args: {
            orderPaymentId: {
				type: GraphQLString
			},
			orderPaymentGateway: {
				type: GraphQLString
			},
			orderTotal: {
				type: GraphQLInt
			},
			orderEmail: {
				type: GraphQLString
			},
			orderFirstname: {
				type: GraphQLString
			},
			orderLastname: {
				type: GraphQLString
			},
			orderAddr1: {
				type: GraphQLString
			},
			orderAddr2: {
				type: GraphQLString
			},
			orderCountry: {
				type: GraphQLString
			},
			orderState: {
				type: GraphQLString
			},
			orderPostcode: {
				type: GraphQLString
			},
			orderPhoneNumber: {
				type: GraphQLString
			},
			orderComment: {
				type: GraphQLString
			},
			orderStatus: {
				type: GraphQLString
			},
			orderDate: {
				type: GraphQLDateTime
			},
			orderProducts: {
				type: orderProductsType
			}
        },
        resolve: order.addOrder
    },
    updateOrder: {
        type: orderType,
        args: {
			id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            orderPaymentId: {
				type: GraphQLString
			},
			orderPaymentGateway: {
				type: GraphQLString
			},
			orderTotal: {
				type: GraphQLInt
			},
			orderEmail: {
				type: GraphQLString
			},
			orderFirstname: {
				type: GraphQLString
			},
			orderLastname: {
				type: GraphQLString
			},
			orderAddr1: {
				type: GraphQLString
			},
			orderAddr2: {
				type: GraphQLString
			},
			orderCountry: {
				type: GraphQLString
			},
			orderState: {
				type: GraphQLString
			},
			orderPostcode: {
				type: GraphQLString
			},
			orderPhoneNumber: {
				type: GraphQLString
			},
			orderComment: {
				type: GraphQLString
			},
			orderStatus: {
				type: GraphQLString
			},
			orderDate: {
				type: GraphQLDateTime
			},
			orderProducts: {
				type: orderProductsType
			}
        },
        resolve: order.updateOrder
    }
};
