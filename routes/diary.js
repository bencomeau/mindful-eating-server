const express = require('express');

const diaryController = require('../controllers/diaryController');

const router = express.Router();

router.get('/', diaryController.index);
router.get('/:date', diaryController.show);
router.post('/', diaryController.create);

module.exports = router;
