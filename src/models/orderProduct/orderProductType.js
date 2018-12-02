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
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		orderPaymentId: {
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
    })
});