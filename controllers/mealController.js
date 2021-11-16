const Meal = require('../database/models/Meal');

exports.create = async (req, res) => {
  try {
    const meal = await Meal.create({ ...req.body, user_id: req.user_id });

    if (meal !== null) {
      res.status(201).json(meal);
    }
  } catch (err) {
    res.status(500).json({
      error: 'Unable to create meal',
      message: 'We were unable to create the meal. Please try again.',
    });
  }
};

exports.get = async (req, res) => {
  try {
    const meals = await Meal.find({ user_id: req.user_id }).exec();

    res.json(meals);
  } catch (err) {
    res.status(404).json({
      error: 'Unable to locate meals',
      message: 'We were unable to locate meals. Please try again.',
    });
  }
};
