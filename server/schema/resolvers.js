const resolvers = {
  Query: {
    getPages: () => pages,
    getPosts: () => posts,
    getAuthors: () => authors,
    getPublications: () => Publication
  },
  Mutation: {
    async addAuthor(parent, args, ctx, info) {
      const emailTaken = await author.email
      if (emailTaken) throw new Error('Email already taken.')
      return author
    }
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
