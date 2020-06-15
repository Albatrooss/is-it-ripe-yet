const Fruit = require('../models/fruit');

const add = async (req, res, next) => {
  let fruit = req.query;
  fruit.type = fruit.type.toLowerCase();
  fruit.bought = new Date(fruit.bought + 'T00:01');
  console.log(fruit);
  try {
    let newFruit = new Fruit(fruit);
    let fruitRes = await newFruit.save(fruit);
    console.log(fruitRes);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
