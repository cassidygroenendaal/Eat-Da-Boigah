const dal = require('../lib/dal');

const burger = {
	selectAll : function(cb) {
		dal.selectAll('burger', cb);
	},

	insertOne : function(vals, cb) {
		dal.insertOne('burger', vals, cb);
	},

	updateOne : function(setVal, whereVal, cb) {
		dal.updateOne('burger', setVal, whereVal, cb);
	}
};

module.exports = burger;
