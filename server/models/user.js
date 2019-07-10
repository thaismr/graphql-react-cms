const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  pages: [{
    type: Schema.Types.ObjectId,
    ref: 'page'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
})

/*UserSchema.pre('save', function save(next) {
  const user = this

  if ( !user.isModified('password') ) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})*/

UserSchema.methods.validPassword = function validPassword(candidatePassword) {
  return candidatePassword == this.password
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    return isMatch
  })
}

const User = mongoose.model('user', UserSchema)

module.exports = { User }
