const Fruit = require('../models/fruit');
const User = require('../models/user');

const add = async (req, res, next) => {
  let fruit = req.query;
  // fruit.type = fruit.type.toLowerCase();
  console.log('date: ', fruit);
  if (fruit.bought === '') {
    console.log('null');
    fruit.bought = Math.ceil(Date.now() / 8.64e7);
  } else {
    console.log('something', fruit.bought);

    fruit.bought = Math.ceil(new Date(fruit.bought).valueOf() / 8.64e7);
  }
  // fruit.bought =
  //   fruit.bought !== null
  //     ? Math.ceil(new Date(fruit.bought).valueOf() / 8.64e7)
  //     : Math.ceil(Date.now() / 8.64e7);
  fruit.user = req.user._id;
  console.log('date: ', fruit.bought);
  try {
    let newFruit = new Fruit(fruit);
    let fruitRes = await newFruit.save(fruit);
    console.log(fruitRes);
    res.redirect('/fruit');
  } catch (err) {
    next(err);
  }
};

const show = async (req, res, next) => {
  try {
    let fruits = await Fruit.find({ user: req.user._id });
    fruits.forEach(fruit => {
      let newColor = fruit.color + findDaysElapsed(fruit.bought);
      fruit.newColor = newColor > 9 ? 9 : newColor;
    });
    console.log(fruits);
    res.render('fruit/show', { title: 'My Fruit', fruits });
  } catch (err) {
    next(err);
  }
};

const profile = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    console.log(user);
    res.render('profile', { title: user.name, user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  show,
  profile,
};

function findDaysElapsed(d) {
  let now = Math.ceil(Date.now() / 8.64e7);
  let bought = d.valueOf();
  let val = now - bought;
  return val > 9 ? 9 : val;
}
