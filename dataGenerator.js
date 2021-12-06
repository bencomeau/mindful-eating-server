require('dotenv').config();
require('./database/connection');

const Meal = require('./database/models/Meal');

const types = ['breakfast', 'lunch', 'dinner', 'snack'];
const foodGroups = ['grain', 'protein', 'fruit', 'vegetable', 'dairy'];
const userIds = [
  107298858805030781801, 111492094629768020000, 104193556601100860000,
];

const meals = [];

// Create 500 of each meal types for each user...
for (let userIndex = 0; userIndex < userIds.length; userIndex++) {
  // Define the user to which we'll create all the data in this iteration
  const user_id = userIds[userIndex];

  for (let typeIndex = 0; typeIndex < types.length; typeIndex++) {
    // Define the meal type
    const type = types[typeIndex];

    // Create a history of the meal type for the user
    for (let mealIndex = 0; mealIndex < 500; mealIndex++) {
      // Go back a day each iteration...
      const date = new Date();
      date.setDate(date.getDate() - mealIndex);

      meals.push({
        name: `${type} for ${date.toLocaleDateString()}`,
        notes: null,
        quantity: Math.floor(Math.random() * 20),
        type,
        foodGroup: foodGroups[Math.floor(Math.random() * 4)],
        user_id,
        time: date,
      });
    }
  }
}

// Clear the collection then insert all the new data
Meal.deleteMany()
  .then(function () {
    Meal.insertMany(meals)
      .then(function () {
        console.log('Data inserted');
      })
      .catch(function (error) {
        console.error('Failed insertMany'.error);
      });
  })
  .catch(function (error) {
    console.error('Failed deleteMany', error);
  });
