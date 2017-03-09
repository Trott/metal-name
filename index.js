'use strict';
var words = require('./words.json');
var sample = require('lodash/collection/sample');

module.exports = function (options = {}) {
  if (! options.fragment) {
  	return `${sample(words.start)} ${sample(words.end)}`;
  }
  return sample(words[options.fragment]);
};
