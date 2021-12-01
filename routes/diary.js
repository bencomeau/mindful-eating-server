const express = require('express');

const diaryController = require('../controllers/diaryController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', diaryController.index);
router.post('/', diaryController.create);

module.exports = router;
