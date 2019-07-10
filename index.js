const server = require('./server')

const environment = process.env.NODE_ENV || 'production'

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url} ${environment}`)
})
