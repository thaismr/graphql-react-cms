const { ApolloServer } = require('apollo-server')
const { RedisCache } = require('apollo-server-cache-redis')
const express = require('express')
const mongoose = require('mongoose')
//const MongoStore = require('connect-mongo')(session)
const { typeDefs, resolvers } = require('./schema')

// Replace your passwords, server addresses, etc:
const private = require('../private/private')

const { MONGO_URI } = private
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  dbName: 'ayvu'
})
const db = mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance'))
  .on('error', () => console.log('Error connecting to MongoLab:'))


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    db: await db,
    req: req
  }),
/*
 context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = getUser(token)
    return { user }
  },
  cache: new RedisCache({
    // Options are passed through to the Redis client
    sentinels: [
      { host: "localhost", port: 26390 },
      { host: "localhost", port: 26391 },
      { host: "localhost", port: 26392 }
    ],
    name: 'masterredis',
    password: 'mysamplepass',
    db: 1
  }), */
})

const app = express();
//server.applyMiddleware({ app });

module.exports = server
