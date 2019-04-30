import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
 } from 'graphql'
export default new GraphQLObjectType({
  name: 'MailingAddress',
  description: 'MailingAddress object',
  fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		Firstname: {
			type: GraphQLString
		},
		Lastname: {
			type: GraphQLString
		},
		Addr1: {
			type: GraphQLString
		},
		Addr2: {
			type: GraphQLString
		},
		Country: {
			type: GraphQLString
		},
		State: {
			type: GraphQLString
		},
		Postcode: {
			type: GraphQLString
		},
		PhoneNumber: {
			type: GraphQLString
		}
    })
});