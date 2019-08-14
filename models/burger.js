const dal = require('../lib/dal');

const burger = {
	selectAll : function(cb) {
		dal.selectAll('burger', cb);
	},

	insertOne : function(cols, vals, cb) {
		dal.insertOne('burger', cols, vals, cb);
	},

	updateOne : function(setVal, whereVal, cb) {
		dal.updateOne('burger', setVal, whereVal, cb);
	}
};

module.exports = burger;
