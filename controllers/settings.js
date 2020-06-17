const User = require('../models/user');

const show = (req, res) => {
  res.render('settings', { title: 'Settings' });
};

const update = async (req, res, next) => {
  try {
    let updatedUser = await User.findOne({ _id: req.user._id });
    updatedUser.name = req.body.name;
    updatedUser.email = req.body.email;
    updatedUser.password = req.body.password;
    updatedUser.perfect = req.body.color;
    console.log(updatedUser);
    let saved = await updatedUser.save();
    console.log(saved);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
  update,
};
