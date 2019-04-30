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
 } from 'graphql'
export default new GraphQLInputObjectType({
  name: 'mailingInput',
  description: 'mailing object',
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
