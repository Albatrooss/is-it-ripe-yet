const express = require('express');
const router = express.Router();

const fruitCtrl = require('../controllers/fruit');

/* GET home page. */
router.get('/add', fruitCtrl.add);

module.exports = router;
