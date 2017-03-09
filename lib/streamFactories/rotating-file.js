'use strict';

const _ = require('lodash');

module.exports = function(options) {
	return _.merge({
		type: 'rotating-file',
		path: options.path
	}, options);
};
