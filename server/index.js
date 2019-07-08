const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')

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
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = getUser(token)
    return { user }
  }
})

module.exports = server
