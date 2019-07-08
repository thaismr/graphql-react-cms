const mongoose = require('mongoose')
const { Schema } = mongoose

const AuthorSchema = new Schema({
  name: { type: String },
  pages: [{
    type: Schema.Types.ObjectId,
    ref: 'page'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
})

const Author = mongoose.model('author', AuthorSchema)

module.exports = { Author }
