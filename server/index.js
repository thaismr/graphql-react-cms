const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')

const environment = process.env.NODE_ENV || 'production'

const pages = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const server = new ApolloServer({
  typeDefs,
  resolvers
})

module.exports = server
