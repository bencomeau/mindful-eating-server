const mongoose = require('mongoose');

const { Schema } = mongoose;

const mealSchema = new Schema({
  user_id: Number,
  type: String,
  name: String,
  quantity: String,
  notes: String,
  foodGroup: String,
  time: { type: Date, default: Date.now },
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
