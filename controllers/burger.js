const express = require('express'),
	router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
	burger.selectAll((data) => {
		res.render('index', { burgers: data });
	});
});

// router.post('/api/burger', (req, res) => {
// 	burger.insertOne(cols, vals, (data) => res.send(200).end());
// });

// router.put('/api/burger/:id', (req, res) => {
// 	burger.updateOne(obj1, obj2, (data) => res.send(200).end());
// });

module.exports = router;
