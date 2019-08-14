const connection = require('../config/connection');

const dal = {
	selectAll : function(table, cb) {
		connection.query('SELECT * FROM ??', table, (err, data) => {
			if (err) return console.log(err);
			cb(data);
		});
	},

	insertOne : function(table, vals, cb) {
		connection.query(
			'INSERT INTO ?? SET ?',
			[
				table,
				vals
			],
			(err, data) => {
				if (err) return console.log(err);
				cb(data);
			}
		);
	},

	updateOne : function(table, setVal, whereVal, cb) {
		connection.query(
			'UPDATE ?? SET ? WHERE ?',
			[
				table,
				setVal,
				whereVal
			],
			(err, data) => {
				if (err) return console.log(err);
				cb(data);
			}
		);
	}
};

module.exports = dal;
