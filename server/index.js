const { ApolloServer } = require('apollo-server')
const { RedisCache } = require('apollo-server-cache-redis')
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
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance'))
  .on('error', () => console.log('Error connecting to MongoLab:'))


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: db,
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = getUser(token)
    return { user }
  }
})

module.exports = server
