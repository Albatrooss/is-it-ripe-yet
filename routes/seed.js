var express = require('express');
var router = express.Router();
const User = require('../models/user');
const seed = require('../config/seed');

console.log(seed);

router.get('/', async (req, res, next) => {
  try {
    let deleted = await User.deleteMany({});
    console.log(deleted);
    let seeded = await User.insertMany(seed);
    console.log(seeded);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
