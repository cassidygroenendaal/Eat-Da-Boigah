const dal = require('../lib/dal');

const burger = {
	selectAll : function(cb) {
		dal.selectAll('burger', cb);
	}
};

module.exports = burger;
