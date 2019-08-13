const express = require('express'),
	router = express.Router(),
	dal = require('../lib/dal');

const model = require('../models/model');

router.get('/model', (req, res) => res.render('index'));

module.exports = router;
