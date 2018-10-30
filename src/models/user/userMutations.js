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
import user from './userSchema';
import authType from './authType';
export default {
    addUser: {
        type: userType,
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
            address1: {
				name: 'address1',
                type: GraphQLString
            },
            address2: {
				name: 'address2',
                type: GraphQLString
            },
            country: {
				name: 'country',
                type: GraphQLString
            },
            state: {
				name: 'state',
                type: GraphQLString
            },
            postcode: {
				name: 'postcode',
                type: GraphQLString
            },
            phone: {
				name: 'phone',
                type: GraphQLString
            },            
            admin: {
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
            address1: {
				name: 'address1',
                type: GraphQLString
            },
            address2: {
				name: 'address2',
                type: GraphQLString
            },
            country: {
				name: 'country',
                type: GraphQLString
            },
            state: {
				name: 'state',
                type: GraphQLString
            },
            postcode: {
				name: 'postcode',
                type: GraphQLString
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
				name: 'admin',
                type: GraphQLBoolean
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
