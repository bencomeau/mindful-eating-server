const Diary = require('../database/models/Diary');

exports.get = async (req, res) => {
  try {
    const diaryEntries = await Diary.find({ user_id: req.user_id }).exec();

    res.json(diaryEntries);
  } catch (err) {
    res.status(404).json({
      error: 'Unable to locate diaryEntries',
      message: 'We were unable to locate diaryEntries. Please try again.',
    });
  }
};


// exports.create = async (req, res) => {
//   try {
//     const diaryEntry = await Diary.create({ ...req.body, user_id: req.user_id });

//     if (diaryEntry !== null) {
//       res.status(201).json(diaryEntry);
//     }
//   } catch (err) {
//     res.status(500).json({
//       error: 'Unable to create diaryEntry',
//       message: 'We were unable to create the diaryEntry. Please try again.',
//     });
//   }
// };


exports.update = async (req, res) => {
  try {
    // var query = { date: req.body.date, user_id: req.user_id };
    // // req.newData.username = req.user.username;

    // // MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    // //     if (err) return res.send(500, {error: err});
    // //     return res.send('Succesfully saved.');
    // // });
    // req.newData = {};
    // req.newData.notes = req.body.notes;
    // // const diaryEntry = 
    // await Diary.findOneAndUpdate(query, req.newData, {new: true, upsert: true}, function(err, doc) {
    //   // console.log("Updated: ", req.body.date, err, res);
    //   if (err) return res.send(500, {error: err});
    //   return res.send('Succesfully saved.');
    //   // return res.status(200).json("SUCCESS");
    // });

    
    const entry = await Diary.findOne({ date: req.body.date, user_id: req.user_id }).clone();
    // await Diary.clone();
    
    // const entry = async(req, res) => {
    //   // return await Diary.findOne({ date: req.body.date, user_id: req.user_id }).exec(function(err,data) {});
    //   return await Diary.findOne({ date: req.body.date, user_id: req.user_id }).exec();
    // }


    // const entry = await Diary.findOne({ date: req.body.date, user_id: req.user_id }).exec(function(err,data) {
    //   if (err) {
    //       throw err;
    //   }
    //   if (data !== null) {
    //     // Update
    //     const diaryEntry = await Diary.updateMany({ date: req.body.date, user_id: req.user_id }, { notes: req.body.notes }, function(err, res) {
    //       console.log("Updated: ", req.body.date, err, res);
    //     });
    //     res.status(200).json(diaryEntry);
    //     // if (diaryEntry !== null) {
    //     //   res.status(200).json(diaryEntry);
    //     // };
  
    //   } else {
    //     // Create
    //     const diaryEntry = await Diary.create({ ...req.body, user_id: req.user_id });
    //     console.log("Created: ", req.body.date);
    //     if (diaryEntry !== null) {
    //       res.status(201).json(diaryEntry);
    //     }
    //   }
  //  });


    // Diary..clone();
    // const diaryEntry = null;

    if (entry !== null) {
      // Update
      const diaryEntry = await Diary.updateMany({ date: req.body.date, user_id: req.user_id }, { notes: req.body.notes }, function(err, res) {
        console.log("Updated: ", req.body.date, err, res);
      });
      res.status(200).json(diaryEntry);
      // if (diaryEntry !== null) {
      //   res.status(200).json(diaryEntry);
      // };

    } else {
      // Create
      const diaryEntry = await Diary.create({ ...req.body, user_id: req.user_id });
      console.log("Created: ", req.body.date);
      if (diaryEntry !== null) {
        res.status(201).json(diaryEntry);
      }
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Unable to create or update diaryEntry',
      message: 'We were unable to create or update the diaryEntry. Please try again.',
    });
  }
};

