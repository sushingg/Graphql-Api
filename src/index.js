// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

import jwt from 'jsonwebtoken';
// Import express server
import express from 'express'

// Import cors 
import cors from 'cors'

// Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models/user/userQueries'
import productQueries from './models/product/productQueries'

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'
import productMutations from './models/product/productMutations'

// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
var app = express()
// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
	user: userQueries.user,
    users: userQueries.users,
    userId: userQueries.userId,
	product: productQueries.product,
    products: productQueries.products,
    productId: productQueries.productId,
	
  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
	login: userMutations.login,
    addUser: userMutations.addUser,
    updateUser: userMutations.updateUser,
	addProduct: productMutations.addProduct,
    updateProduct: productMutations.updateProduct,
	
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
async function dbconnect(){
	// Connect MongoDB with Mongoose
	mongoose.connect(process.env.DB,{
	  useCreateIndex: true,
	  useNewUrlParser: true,
	  useFindAndModify: false
	})
    await mongoose.connection.on('error', function (err) {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', function () {
        console.log('Connection extablised with MongoDB')
    })
	var status = {
	  Express: {
		"Online": true,
		"Port": 4000
	  },
	  "GraphiQL": {
		"url": "http://localhost:4000/graphql"
	  }
	}
	await console.dir(status, {depth: null, colors: true })
}
dbconnect();
async function test(){
	var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YmQ3NjRhYTcwMzgzMDA2ZDQxMTA5Y2QiLCJlbWFpbCI6InNoaW5Ac2hpbi5jaCIsImFkbWluIjp0cnVlLCJleHAiOjE1NDA5MjYxODksImlhdCI6MTU0MDkyMjU4OX0.P2WasZ5QF_3C3rfHkJEwqCSsaDifb-kw-F0R9A-roeI"

	var decoded = await jwt.verify(token,process.env.SECRET, function(err, decoded) {
		if(!err) return decoded
	});
	if (decoded){
		console.log(await decoded) // bar
		var current_time = new Date().getTime() / 1000;
		console.log(current_time)
		if (current_time > decoded.exp) {
		  console.log("Expired!")
		}else{
			console.log("Not Expired!")
		}
	}
	
	
}
test()
var apiToken = express.Router(); 
// route middleware to verify a token
apiToken.get('/', function(req, res) {
  return res.status(403).send({ 
        success: false, 
        message: 'welcome to my graphql api yay' 
    });
});
apiToken.use(function(req, res, next) {
  //console.log(req.headers['x-access-token'])
  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token,process.env.SECRET, function(err, decoded) {      
      if (err) {
        req.decoded = {error: true, message: 'Failed to authenticate token.'}   
		console.log({error: true, message: 'Failed to authenticate token.'} );
		next();
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        var admin = decoded.admin;
        var id = decoded.id;
        console.log(req.originalUrl,' id:',id,' admin:',admin);
        next();
      }
    });

  } else {
	req.decoded = {error: true, message: 'No token provided.'}
	console.log({error: true, message: 'No token provided.'});
	next();
  }
});
app.use('/', apiToken);
// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
app.get('/', function(req, res) {
  return res.status(404)        // HTTP status 404: NotFound
   .send('Not found');
});
apiToken.use('/graphql', cors(),graphqlHTTP(request => ({schema: schema, rootValue: request, graphiql: true,}))  )
app.listen(process.env.PORT||4000)


