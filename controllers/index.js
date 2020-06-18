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
      console.log(arr);
      fruits = await Fruit.find({ user: { $in: arr } }).populate('user');
      console.log(fruits);
    }
    res.render('index', { title: 'Is It Ripe Yet?', fruits, errs });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
};
