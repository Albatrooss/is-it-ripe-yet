const { getMaxListeners } = require('../models/user');

module.exports = {
  users: [
    {
      name: 'Tim Robillard',
      email: 'tim@gmail.com',
      password: '123',
    },
    {
      name: 'Caitlin Elmslie',
      email: 'caitlin@gmail.com',
      password: '123',
    },
    {
      name: 'Adam Robillard',
      email: 'adam@gmail.com',
      password: '123',
    },
    {
      name: 'Hannah Brown',
      email: 'hannah@gmail.com',
      password: '123',
    },
    {
      name: 'Kyla Hidalgo',
      email: 'kyla@gmail.com',
      password: '123',
    },
  ],
  fruits: [
    {
      name: 'First fruit',
      color: 3,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'kyla@gmail.com',
    },
    {
      name: 'My fruit',
      color: 1,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'tim@gmail.com',
    },
    {
      name: 'Fruity',
      color: 4,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'adam@gmail.com',
    },
    {
      name: 'First fruit',
      color: 2,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'tim@gmail.com',
    },
    {
      name: 'First fruit',
      color: 1,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'tim@gmail.com',
    },
    {
      name: 'First fruit',
      color: 3,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'caitlin@gmail.com',
    },
    {
      name: 'First fruit',
      color: 5,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'hannah@gmail.com',
    },
    {
      name: 'First fruit',
      color: 8,
      bought: Math.ceil(Date.now() / 8.64e7),
      user: 'adam@gmail.com',
    },
  ],
};
