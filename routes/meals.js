const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all meals for user');
});

module.exports = router;
