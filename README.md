# GraphQL + Express + MongoDB 
[![GitHub license](https://img.shields.io/github/license/sushingg/Graphql-Api.svg)](https://github.com/sushingg/Graphql-Api/blob/master/LICENSE)

> A small project using GraphQL with MongoDB in Express
> use for serve data for e-commerce website

## Installation

#### ES6 / Node V8+
This project makes use of ES6 which requires a 8+ version of Node https://nodejs.org/en/download/

#### MongoDB
In order to run this project you need to install MongoDB and ensure an instance is running.
https://www.npmjs.com/package/mongodb

#### NPM Modules
The following NPM modules are required in package.json:

* express
* express-graphql
* graphql
* mongoose
* babel-cli
* babel-preset-es2015
* nodemon
* jsonwebtoken
* graphql-iso-date
* cors
* bcrypt

Install with:

```js
yarn install
```

#### Run the project

##### Running in Development
npm dev is configured with nodmon so that the server automatically restarts when code files are changes
```js
set DB=<your monogodb uri>
set SECRET=<secret for make auth>
set OMISE_PUBLIC_KEY=<omise_public_key>
set OMISE_SECRET_KEY=<omise_secret_key>
yarn dev

```

##### Running in Production
```js
yarn start
```


## Running GraphQL Mutations & Queries
You can run these queries / mutations within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.

## GraphQL Resolvers
GraphQL doesn't care where your data is stored, in this case it's in a MongoDB.

[userSchema.js](src/models/user/userSchema.js) uses a Mongoose Schemea and configures a number of exported functions for our GraphQL Resolvers to work with in order to load a user / list of users or create and update a user.

## GraphQL Schema
[userType.js](src/models/user/userType.js) creates a GraphQLObjectType describing the structure of our data model.

[userMutations.js](src/models/user/userMutations.js) and [userQueries.js](src/models/user/userQueries.js) specify the operations available from GraphQL and link to our resolvers, in this case Mongoose operations that return a promise.
