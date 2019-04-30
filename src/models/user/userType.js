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
import orderType from './order/orderType';
import mailingType from './mailing/mailingType'
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password:{
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },        
        created: {
            type: GraphQLDateTime
        },
        admin: {
            type: GraphQLBoolean
        },
        order:{
            type: new GraphQLList(orderType)
        },
        addresses:{
            type: new GraphQLList(mailingType)
        },
        defaultAddress:{
            type: mailingType
        }
    })
});