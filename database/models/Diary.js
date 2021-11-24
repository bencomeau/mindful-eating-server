const mongoose = require('mongoose');

const { Schema } = mongoose;

const diarySchema = new Schema({
  user_id: Number,
  notes: String,
  date: String,
});

const Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;
