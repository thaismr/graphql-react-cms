const { ApolloServer } = require('apollo-server')
const { RedisCache } = require('apollo-server-cache-redis')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
LocalStrategy = require('passport-local').Strategy
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
  uploads: {
    maxFileSize: 1000000, // 1 MB
    maxFiles: 5
  },
  context: async ({ req }) => {
    const auth = (req.headers && req.headers.authorization) || ''
    const email = new Buffer(auth, 'base64').toString('ascii')
    const { User } = require('./models/user')
    //req.user = await passport.authenticate('local')
    //const token = req.headers.authorization || ''
    //const { headers } = req
    const user = await User.findOne({ email: email })
    console.log({ user })
    return { user }
  },
/*

  cache: new RedisCache({
    // Options are passed through to the Redis client
    sentinels: [
      { host: "localhost", port: 26390 },
      { host: "localhost", port: 26391 },
      { host: "localhost", port: 26392 }
    ],
    name: 'masterredis',
    password: 'mysamplepass',
    db: 0
  }), */
})

//const app = express();
//server.applyMiddleware({ app });

module.exports = server
