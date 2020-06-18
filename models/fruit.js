const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema(
  {
    name: { type: String, required: true },
    bought: { type: Number, default: Date.now() / 8.64e7, min: 0, max: Date.now() / 8.64e7 },
    type: { type: String, default: 'banana', enum: ['banana', 'avocado'] },
    color: { type: Number, min: 0, max: 9, default: 0 },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Fruit', fruitSchema);
