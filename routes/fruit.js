const express = require('express');
const router = express.Router();

const fruitCtrl = require('../controllers/fruit');

/* GET home page. */
router.get('/', fruitCtrl.show);
router.get('/add', fruitCtrl.add);
router.get('/:id', fruitCtrl.profile);

module.exports = router;
