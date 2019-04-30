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
 } from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import orderProductInput from '../order/orderProductInput'
import mailingInput from '../mailing/mailingInput'
export default new GraphQLInputObjectType({
  name: 'orderInput',
  description: 'order object',
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
			type: new GraphQLList(orderProductInput)
		},
		orderPaymentLink: {
			type: GraphQLString
		},
		shippingAddress:{
				type: mailingInput
		}
    })
});
