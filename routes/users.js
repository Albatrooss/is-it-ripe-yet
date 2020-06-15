var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/login', usersCtrl.loginForm);
router.post('/login', usersCtrl.login);
router.get('/signup', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);
router.get('/logout', usersCtrl.logout);

module.exports = router;
