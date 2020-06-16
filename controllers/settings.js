const show = (req, res) => {
  res.render('settings', { title: 'Settings' });
};

module.exports = {
  show,
};
