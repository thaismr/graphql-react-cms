const resolvers = {
  Query: {
    getPages: () => pages,
    getPosts: () => posts,
    getAuthors: () => authors,
    getPublications: () => Publication
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
