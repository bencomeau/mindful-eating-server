const express = require('express');

const diaryController = require('../controllers/diaryController');

const router = express.Router();

router.get('/', diaryController.get);
router.post('/', diaryController.create);

module.exports = router;
