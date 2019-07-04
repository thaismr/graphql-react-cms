const { gql } = require('apollo-server')

const typeDefs = gql `
  # Type definitions:

  type Page {
    title: String!
    author: String!
  }

  type Query {
    pages: [Page]
  }
`
module.exports = typeDefs
