const User = require('../models/user');
const Fruit = require('../models/fruit');

const show = async (req, res, next) => {
  try {
    // let user = User.findById(req.user.id)
    // let friends = User.find({})
    res.render('index', { title: 'Is It Ripe Yet?' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
};
