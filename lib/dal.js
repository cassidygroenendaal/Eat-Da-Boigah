const connection = require('../config/connection');

const dal = {
	selectAll : function(table, cb) {
		connection.query('SELECT * FROM ??', table, (err, data) => {
			if (err) return console.log(err);
			cb(data);
		});
	},

	insertOne : function(table, cols, vals, cb) {
		connection.query(
			'INSERT INTO ?? ? VALUES ?',
			[
				table,
				cols,
				vals
			],
			(err, data) => {
				if (err) return console.log(err);
				cb(data);
			}
		);
	},

	updateOne : function(table, obj1, obj2, cb) {
		connection.query(
			'UPDATE ? SET ? WHERE ?',
			[
				table,
				obj1,
				obj2
			],
			(err, data) => {
				if (err) return console.log(err);
				cb(data);
			}
		);
	}
};

module.exports = dal;
