const User = require('../models/user');

const show = async (req, res, next) => {
  try {
    let query = new RegExp(`^${req.query.name}`, 'i');
    let results = await User.find({ name: query });
    console.log(query);
    res.render('search', { title: 'Search', results });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
};
