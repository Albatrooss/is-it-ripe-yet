var express = require('express');
var router = express.Router();
const passport = require('passport');

const indexCtrl = require('../controllers/index');
const settingsCtrl = require('../controllers/settings');

/* GET home page. */
router.get('/', indexCtrl.show);
router.get('/success', (req, res) => res.redirect('/'));
router.get('/err', (req, res) => res.render('error', { message: 'hello' }));

/*--- google OAuth ----*/
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/oauthGoogleCallback',
  passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/err',
  })
);

router.get('/settings', settingsCtrl.show);

module.exports = router;
