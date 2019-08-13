const express = require('express'),
	router = express.Router();

const burger = require('../models/burger');

router.get('/burger', (req, res) => {
	burger.selectAll((data) => res.json(data));
});

module.exports = router;
