const express = require('express');

const diaryController = require('../controllers/diaryController');

const router = express.Router();

router.get('/', diaryController.get);
router.post('/', diaryController.update);
// router.post('/update', diaryController.update);

module.exports = router;
