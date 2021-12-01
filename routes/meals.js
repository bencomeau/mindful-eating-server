const express = require('express');

const mealController = require('../controllers/mealController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', mealController.get);
router.post('/', mealController.create);

module.exports = router;
