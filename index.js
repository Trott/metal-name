'use strict';
var words = require('./words.json');
var sample = require('lodash/collection/sample');

module.exports = function () {
	return sample(words.part1) + ' ' + sample(words.part2);
};
