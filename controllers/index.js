const express = require('express'),
	router = express.Router(),
	dal = require('../lib/dal');

router.get('/', (req, res) => {
	dal.getAll(res);
});

module.exports = router;
