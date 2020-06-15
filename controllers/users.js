const passport = require('passport');
const User = require('../models/user');
const user = require('../models/user');

const loginForm = (req, res) => {
  res.render('users/login', { title: 'Please Login', postUrl: 'login', btnText: 'Sign In' });
};

const login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .select('+password')
    .exec((err, user) => {
      if (err) return next(err); //make this better later
      if (!user) return next('user not found'); // make this better later
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          req.logIn(user, err => {
            if (err) return next(err);
            return res.redirect('/');
          });
          return next(Error('invalid Credentials'));
        }
      });
    });
};

const signupForm = (req, res) => {
  res.render('/users/signup', {
    title: 'Please Sign Up',
    postUrl: '/signup',
    btnText: 'Sign Up',
  });
};

const signup = async (req, res, next) => {
  let user = new User(req.body);
  try {
    user = await user.save();
    req.logIn(user, err => {
      if (err) return next(err);
      return res.redirect('/');
    });
  } catch (err) {
    next(err); //prob should redirect
  }
};

const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = {
  loginForm,
  signupForm,
  login,
  signup,
  logout,
};
