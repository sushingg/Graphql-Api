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
import orderUpdateType from './order/orderUpdateType'
import addUserOrderType from './order/addUserOrderType'
import orderProductInput from './order/orderProductInput'
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
    updateUserOrder: {
        type: orderUpdateType,
        args: {
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
        },
        resolve: user.updateUserOrder
    },
    addUserOrder: {
        type: addUserOrderType,
        args: {
			id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            order:{
                name:'order',
                type: orderInput
            }
        },
        resolve: user.addUserOrder
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
