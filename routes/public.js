const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Panslonuvo' });
});

module.exports = router;