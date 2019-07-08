const { gql } = require('apollo-server')

const typeDefs = gql`
  # Type definitions:

  union Publication = Page | Post

  enum UserRole {
    ANONYMOUS
    USER
    EDITOR
  }

  type Page {
    id: ID!
    author: Author!
    title: String!
    body: String!
  }

  type PageAddResponse {
    success: Boolean!
    message: String
    page: Page
  }

  input PageInput {
    author: ID!
    title: String!
    body: String!
  }

  type Post {
    id: ID!
    author: Author!
    headline: String!
    body: String!
  }

  type Author {
    id: ID!
    name: String!
    role: UserRole
    pages: [Page]
    posts: [Post]
  }

  type Query {
    myself: Author
    getPages: [Page]
    getPosts: [Post]
    getAuthors: [Author]
    getPublications(author: ID): [Publication]
  }

  type Mutation {
    addAuthor(name: String): Author
    addPage(page: PageInput): PageAddResponse!
  }
`
module.exports = typeDefs
