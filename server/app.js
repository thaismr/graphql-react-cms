const express = require("express")
const { postgraphile } = require("postgraphile")
const private = require('./private/private')

const { POSTGRES_URI } = private

console.log(POSTGRES_URI)

const app = express()

app.use(
  postgraphile(POSTGRES_URI, "app_public", {
    graphiql: true,
    enableCors: true,
    enhanceGraphiql: true,
  })
)

app.listen(5000, () => {
  console.log("Server listening on port 5000")
})
