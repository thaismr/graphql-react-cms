const mongoose = require('mongoose')
const passport = require('passport')
LocalStrategy = require('passport-local').Strategy
const User = mongoose.model('user')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, 'Incorrect username.');
      }
      if (!user.validPassword(password)) {
        return done(null, false, 'Incorrect password.');
      }
      return done(null, user);
    })
  }
))

function login({ email, password, req }) {
  console.log(req)
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        console.log(req)
        reject('Invalid credentials.')
      }
      return user
      //req.logIn(user, () => resolve(user))
    })({ body: { email, password } })
  })
}

module.exports = { login }
