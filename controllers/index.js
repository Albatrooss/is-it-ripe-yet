const User = require('../models/user');
const Fruit = require('../models/fruit');
const user = require('../models/user');

const show = async (req, res, next) => {
  try {
    let errs = req.flash().errs || [];
    let fruits = [];
    if (req.user) {
      let arr = req.user.friends;
      arr.push(req.user._id);
      fruits = await Fruit.find({ user: { $in: arr } }).populate('user');
      fruits.forEach(fruit => {
        let newColor = fruit.color + findDaysElapsed(fruit.bought);
        fruit.color = newColor > 7 ? 7 : newColor;
      });
    }
    res.render('index', { title: 'Is It Ripe Yet?', fruits, errs });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
};

function findDaysElapsed(d) {
  let now = Math.ceil(Date.now() / 8.64e7);
  let bought = d;
  let val = now - bought;
  return val > 9 ? 9 : val;
}
