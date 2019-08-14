const express = require('express'),
	router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
	burger.selectAll((data) => {
		res.render('index', { burgers: data });
	});
});

router.post('/api/burger', (req, res) => {
	burger.insertOne(req.body, (data) => {
		if (data.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.put('/api/burger/:id', (req, res) => {
	let setVal = { devoured: req.body.nextState };
	let whereVal = { id: req.params.id };
	burger.updateOne(setVal, whereVal, (data) => {
		if (data.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
