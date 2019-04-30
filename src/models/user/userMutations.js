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
import userType from './userType';
import regisType from './regisType';
import user from './userSchema';
import authType from './authType';
import orderInput from './order/orderInput';
import mailingInput from './mailing/mailingInput'
export default {
    addUser: {
        type: regisType,
        args: {
            firstName: {
                name: 'firstName',
                type: new GraphQLNonNull(GraphQLString)
            },
            lastName: {
				name: 'lastName',
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
				name: 'email',
                type: new GraphQLNonNull(GraphQLString)
            },
			password: {
				name: 'password',
                type: new GraphQLNonNull(GraphQLString)
            },
            phone: {
				name: 'phone',
                type: GraphQLString
            },            
            created: {
                name: 'created',
                type: GraphQLDateTime
            },
            admin: {
                name:'admin',
                type: GraphQLBoolean 
            }
        },
        resolve: user.addUser
    },
    updateUser: {
        type: userType,
        args: {
			id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            firstName: {
                name: 'firstName',
                type: GraphQLString
            },
            lastName: {
				name: 'lastName',
                type: GraphQLString
            },
            email: {
				name: 'email',
                type: GraphQLString
            },
            password: {
				name: 'password',
                type: new GraphQLNonNull(GraphQLString)
            },
            phone: {
				name: 'phone',
                type: GraphQLString
            },
            admin: {
				name: 'admin',
                type: GraphQLBoolean
            },
            order:{
                name:'order',
                type: new GraphQLList(orderInput)
            },
            addresses:{
                name:'address',
                type: new GraphQLList(mailingInput)
            },
            defaultAddress:{
                name:'defaultAddress',
                type: mailingInput
            }
        },
        resolve: user.updateUser
    },
    login: {
        type: authType,
        args: {
            email: {
                name: 'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                name: 'password',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: user.auth
    }
};
