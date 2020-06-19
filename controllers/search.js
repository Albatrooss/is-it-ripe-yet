const User = require('../models/user');

const show = async (req, res, next) => {
  try {
    let query = new RegExp(req.query.name, 'i');
    let results = await User.find({ name: query });
    let everyoneElse = results.filter(x => {
      let test = x._id.toString() !== req.user._id.toString();
      return test;
    });
    res.render('search', { title: 'Search', results: everyoneElse });
  } catch (err) {
    next(err);
  }
};

const addFriend = async (req, res, next) => {
  try {
    let friend = await User.findById(req.params.id);
    friend.friends.push(req.user._id);
    let m1 = await friend.save();
    req.user.friends.push(req.params.id);
    let message = await req.user.save();
    console.log(message, m1);
    res.redirect(`/fruit/${req.params.id}`);
  } catch (err) {
    next(err);
  }
};

const removeFriend = async (req, res, next) => {
  try {
    let myFriends = req.user.friends;
    console.log(myFriends);
    let myInd = myFriends.findIndex(x => x.toString() === req.params.id.toString());
    myFriends.splice(myInd, 1);
    console.log(myFriends);
    let other = await User.findById(req.params.id);
    let otherFriends = other.friends;
    console.log(otherFriends);
    let friendInd = otherFriends.findIndex(x => x.toString() === req.user._id.toString());
    otherFriends.splice(friendInd, 1);
    console.log(otherFriends);
    req.user.friends = myFriends;
    other.friends = otherFriends;
    let meSave = await req.user.save();
    let otherSave = await other.save();
    console.log(meSave, otherSave);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  show,
  addFriend,
  removeFriend,
};
