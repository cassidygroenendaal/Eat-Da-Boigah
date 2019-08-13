const connection = require('../config/connection');

const dal = {
	selectAll : function(table, cb) {
		connection.query('SELECT * FROM ??', table, (err, data) => {
			if (err) return console.log(err);
			cb(data);
		});
	},

	insertOne : function(table, cols, newItem, cb) {
		connection.query(
			'INSERT INTO ?? ?? VALUES ??',
			[
				table,
				cols,
				newItem
			],
			(err, data) => {
				if (err) return console.log(err);
				cb(data);
			}
		);
	},

	updateOne : function(cb) {}
};

module.exports = dal;
