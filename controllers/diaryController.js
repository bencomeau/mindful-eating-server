const Diary = require('../database/models/Diary');

exports.create = async (req, res) => {
  try {
    const filter = {
      user_id: req.user_id,
      date: new Date().toISOString().slice(0, 10),
    };
    const update = {
      notes: req.body.notes,
    };

    const diary = await Diary.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });

    if (diary !== null) {
      res.status(201).json(diary);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: JSON.stringify(err),
      message: 'We were unable to create the diary entry. Please try again.',
    });
  }
};

exports.get = async (req, res) => {
  try {
    const diary = await Diary.find({
      user_id: req.user_id,
      date: new Date().toISOString().slice(0, 10),
    }).exec();

    res.json(diary);
  } catch (err) {
    res.status(404).json({
      error: 'Unable to locate diary',
      message: 'We were unable to locate diary. Please try again.',
    });
  }
};
