const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema(
  {
    name: { type: String, required: true },
    bought: { type: Date, default: Date.now() },
    type: { type: String, required: true, enum: ['banana', 'avocado'] },
    color: { type: Number, min: 0, max: 9, default: 0 },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Fruit', fruitSchema);
