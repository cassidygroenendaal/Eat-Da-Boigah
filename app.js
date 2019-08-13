const express = require('express'),
	exphbs = require('express-handlebars');

const connection = require('./config/connection');

const app = express(),
	PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	connection.query('SELECT * FROM burger', (err, data) => {
		if (err) return console.log(err);
		return res.json(data);
	});
});

app.listen(PORT);
