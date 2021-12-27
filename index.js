'use strict'
const words = require('./words.json')
const sample = require('lodash.sample')

module.exports = function (options = {}) {
  if (!options.fragment) {
    return `${sample(words.start)} ${sample(words.end)}`
  }
  return sample(words[options.fragment])
}
