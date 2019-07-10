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
    author: User!
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
    author: User!
    headline: String!
    body: String!
  }

  type User {
    id: ID
    name: String!
    email: String!
    password: String!
    role: UserRole
    pages: [Page]
    posts: [Post]
  }

  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
  }

  type Query {
    myself: User
    uploads: [File]
    getPages: [Page]
    getPosts: [Post]
    getAuthors: [User]
    getPublications(author: ID): [Publication]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(name: String!, email: String!, password: String!): User
    singleUpload(file: Upload!): File!
    multipleUpload(files: [Upload!]!): [File!]!
    addPage(page: PageInput): PageAddResponse!
  }
`
module.exports = typeDefs
