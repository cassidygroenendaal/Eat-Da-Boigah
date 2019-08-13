const connection = require('../config/connection');

const dal = {
	getAll : function(res) {
		connection.query('SELECT * FROM burger', (err, data) => {
			if (err) return console.log(err);
			return res.json(data);
		});
	}
};

module.exports = dal;
