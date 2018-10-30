# GraphQL + Express + MongoDB

> A small project using GraphQL with MongoDB in Express

## Installation

#### ES6 / Node V8+
This project makes use of ES6 which requires a 8+ version of Node https://nodejs.org/en/download/

#### MongoDB
In order to run this project you need to install MongoDB and ensure an instance is running.
https://www.npmjs.com/package/mongodb

```js
npm install mongodb --save
mongod
```

To see the data you are saving you can use a MongoDB Manager App such as https://robomongo.org/

#### NPM Modules
The following NPM modules are required in package.json:

* express
* express-graphql
* graphql
* mongoose
* babel-cli
* babel-preset-es2015
* nodemon

Install with:

```js
npm install
```

#### Run the project

##### Running in Development
npm dev is configured with nodmon so that the server automatically restarts when code files are changes
```js
npm run dev
```

##### Running in Production
```js
npm start
```
npm prestart will run first, transpile the ES6 code and save to _dist_ folder. npm start will then run the code directly from the _dist_ folder

## Running GraphQL Mutations & Queries
You can run these queries / mutations within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.

## GraphQL Resolvers
GraphQL doesn't care where your data is stored, in this case it's in a MongoDB.

[userSchema.js](src/models/user/userSchema.js) uses a Mongoose Schemea and configures a number of exported functions for our GraphQL Resolvers to work with in order to load a user / list of users or create and update a user.

## GraphQL Schema
[userType.js](src/models/user/userType.js) creates a GraphQLObjectType describing the structure of our data model.

[userMutations.js](src/models/user/userMutations.js) and [userQueries.js](src/models/user/userQueries.js) specify the operations available from GraphQL and link to our resolvers, in this case Mongoose operations that return a promise.
