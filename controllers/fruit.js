const Fruit = require('../models/fruit');

const add = async (req, res, next) => {
  let fruit = req.query;
  fruit.type = fruit.type.toLowerCase();
  fruit.bought ? new Date(fruit.bought + 'T00:01') : '';
  fruit.user = req.user._id;
  try {
    let newFruit = new Fruit(fruit);
    let fruitRes = await newFruit.save(fruit);
    console.log(fruitRes);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

const show = async (req, res, next) => {
  try {
    let fruits = await Fruit.find({ user: req.user._id });
    console.log(fruits);
    res.render('fruit/show', { title: 'My Fruit', fruits });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  show,
};
