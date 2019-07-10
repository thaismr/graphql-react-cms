const { User } = require('../models/user')
const AuthService = require('../auth')

const resolvers = {
  Query: {
    myself: (parent, args, { user }, info) => user,
    getPages: () => pages,
    getPosts: () => posts,
    getAuthors: () => authors,
    getPublications: () => Publication
  },
  Mutation: {
    login: async (parent, { email, password }, { req }, info) => {
      return await AuthService.login({ email, password, req })
    },
    addUser: async (parent, { name, email, password }, ctx, info) => {
      try {
        return (await new User({ name, email, password })).save()
      } catch(e) {
        throw new Error('Error: ' + e.message)
      }
//      const emailTaken = await author.email
//      if (emailTaken) throw new Error('Email already taken.')
    },
  },
  Publication: {
    __resolveType(obj, ctx, info) {
      if (obj.title) return 'Page'
      if (obj.headline) return 'Post'
      return null
    },
  },
}

module.exports = resolvers
