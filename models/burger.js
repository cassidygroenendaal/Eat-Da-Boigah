const dal = require('../lib/dal');

const burger = {
	selectAll : function(cb) {
		dal.selectAll('burger', cb);
	},

	insertOne : function(cols, vals, cb) {
		dal.insertOne('burger', cols, vals, cb);
	},

	updateOne : function(obj1, obj2, cb) {
		dal.updateOne('burger', obj1, obj2, cb);
	}
};

module.exports = burger;
