const express = require('express');

const router = express.Router();

const MEALS = [
  {
    id: 123,
    type: 'Breakfast',
    name: 'Oatmeal',
    quantity: '1/2 cup',
    notes: 'No brown sugar',
    time: '2021-11-09T08:00:54',
    foodGroup: 'grain',
  },
  {
    id: 234,
    type: 'Lunch',
    name: 'Sushi',
    quantity: '2 rolls',
    notes: 'Soy sauce + wasabi',
    time: '2021-11-09T11:40:54',
    foodGroup: 'protein',
  },
  {
    id: 345,
    type: 'Dinner',
    name: 'Lentils',
    quantity: '1/3 cup',
    time: '2021-11-09T18:30:54',
    foodGroup: 'grain',
  },
  {
    id: 456,
    type: 'Snack',
    name: 'Strawberries',
    quantity: '5 berries',
    time: '2021-11-09T23:40:54',
    foodGroup: 'fruit',
  },
  {
    id: 567,
    type: 'Breakfast',
    name: 'Pancakes',
    quantity: '2 small pancakes',
    notes: '1 oz of syrup, no butter',
    time: '2021-11-10T08:00:54',
    foodGroup: 'protein',
  },
  {
    id: 678,
    type: 'Lunch',
    name: 'Lasagna',
    quantity: '1 small piece',
    time: '2021-11-10T11:40:54',
    foodGroup: 'protein',
  },
  {
    id: 789,
    type: 'Dinner',
    name: 'Carrots and hummus!',
    quantity: '4 large carrots',
    time: '2021-11-10T18:30:54',
    foodGroup: 'vegetable',
  },
];

router.get('/', (req, res) => {
  res.json(MEALS);
});

module.exports = router;
