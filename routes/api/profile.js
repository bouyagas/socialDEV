const express = require('express');
const router = express.Router();

// @router  GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('hello profile');
});

module.exports = router;
