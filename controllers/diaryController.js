const Diary = require('../database/models/Diary');

exports.index = async (req, res) => {
  try {
    let diary;

    if (req.query.date) {
      diary = await Diary.findOne({
        user_id: req.user_id,
        date: decodeURIComponent(req.query.date),
      }).exec();
    } else {
      diary = await Diary.find({
        user_id: req.user_id,
      })
        .sort([['date', -1]])
        .exec();
    }

    res.json(diary);
  } catch (err) {
    res.status(404).json({
      error: 'Unable to locate diaries',
      message: 'We were unable to locate diaries. Please try again.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const filter = {
      user_id: req.user_id,
      date: decodeURIComponent(req.body.date),
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
