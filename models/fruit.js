const mongoose = require('mongoose');
const { getMaxListeners } = require('./user');
const Schema = mongoose.Schema;

const fruitSchema = new Schema(
  {
    name: { type: String, required: true },
    bought: {
      type: Number,
      default: getMax(),
      min: 0,
      max: getMax(),
    },
    type: { type: String, default: 'banana', enum: ['banana', 'avocado'] },
    color: { type: Number, min: 0, max: 9, default: 0 },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

function getMax() {
  let today = new Date(Date.now());
  let hours = today.getHours();
  return Math.ceil((today.valueOf() - hours * 3.6e6) / 8.64e7);
}

module.exports = mongoose.model('Fruit', fruitSchema);
