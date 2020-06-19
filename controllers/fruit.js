const Fruit = require('../models/fruit');
const User = require('../models/user');

const add = async (req, res, next) => {
  let fruit = req.query;
  // fruit.type = fruit.type.toLowerCase();
  if (fruit.bought === '') {
    delete fruit.bought;
  } else {
    fruit.bought = Math.floor(new Date(fruit.bought).valueOf() / 8.64e7);
  }
  fruit.user = req.user._id;
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
      fruit.newColor = newColor > 7 ? 7 : newColor;
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
    let fruits = await Fruit.find({ user: req.params.id });
    res.render('fruit/profile', { title: user.name, user, fruits });
  } catch (err) {
    next(err);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    let deleted = await Fruit.findByIdAndRemove(req.params.id);
    console.log('Deleted: ', deleted);
    res.redirect('/fruit');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  show,
  profile,
  delete: deleteOne,
};

function findDaysElapsed(d) {
  let now = Math.ceil(Date.now() / 8.64e7);
  let bought = d;
  let val = now - bought;
  return val > 9 ? 9 : val;
}
