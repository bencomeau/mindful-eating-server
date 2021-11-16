const express = require('express');

const mealController = require('../controllers/mealController');

const router = express.Router();

router.get('/', mealController.get);
router.post('/', mealController.create);

module.exports = router;
