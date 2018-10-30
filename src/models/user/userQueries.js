import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import userType from './userType'
import user from './userSchema'

export default {
    users: {
        type: new GraphQLList(userType),
        resolve: user.getListOfUsers
    },
    user: {
        type: userType,
        args: {
            firstName: {
                type: GraphQLString
            },
            lastName: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
        },
        resolve: user.getUser
    },
    userId: {
        type: userType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: user.getUserById
    }
};