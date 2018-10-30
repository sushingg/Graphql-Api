// Import GraphQL and destructure for easy access
import {
  GraphQLObjectType,
  GraphQLSchema
 } from 'graphql'

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

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'

// Setup GraphQL RootQuery
let RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Realize Root Query',
  fields: () => ({
	user: userQueries.user,
    users: userQueries.users,
    userId: userQueries.userId,
  })
})

// Setup GraphQL RootMutation
let RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Realize Root Mutations',
  fields: () => ({
    addUser: userMutations.addUser,
    updateUser: userMutations.updateUser,
	login: userMutations.login
  })
})

// Set up GraphQL Schema with our RootQuery and RootMutation
let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
async function dbconnect(){
	// Connect MongoDB with Mongoose
	mongoose.connect('mongodb://dbuser:shin1996@ec2-52-91-20-77.compute-1.amazonaws.com/project-z',{
	  useCreateIndex: true,
	  useNewUrlParser: true
	})
    await mongoose.connection.on('error', function (err) {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', function () {
        console.log('Connection extablised with MongoDB')
    })
	var status = {
	  Express: {
		"Online": true,
		"Port": 3000
	  },
	  "GraphiQL": {
		"url": "http://localhost:3000/graphql"
	  }
	}
	await console.dir(status, {depth: null, colors: true })
}
dbconnect();


// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
var app = express()
app.get('/', function(req, res) {
  return res.status(404)        // HTTP status 404: NotFound
   .send('Not found');
});
app.use('/graphql', cors(), graphqlHTTP({ schema: schema, graphiql: true }))
app.listen('4000')


