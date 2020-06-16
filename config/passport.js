const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/user');

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ email: profile.emails[0].value }, (err, user) => {
        if (err) return cb(er);
        if (user) {
          return cb(null, user);
        } else {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: 'google',
          });
          newUser.save(err => {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);

passport.use(
  'facebookToken',
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('profile', profile);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) return done(null, user);
        const newUser = new User({
          name: profile.name,
          email: profile.emails[0].value,
          password: 'facebook',
        });
        let savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
