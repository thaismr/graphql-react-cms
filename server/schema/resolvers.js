const { Author } = require('../models/author');

const resolvers = {
  Query: {
    myself: (parent, args, { user }, info) => user,
    getPages: () => pages,
    getPosts: () => posts,
    getAuthors: () => authors,
    getPublications: () => Publication
  },
  Mutation: {
    addAuthor: async (parent, { name }, { db }, info) => {
      try {
        return (await new Author({ name })).save()
      } catch(e) {
        return e.message
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
