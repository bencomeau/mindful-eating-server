const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Number,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
