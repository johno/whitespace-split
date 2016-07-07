'use strict'

var isPresent = require('is-present')

module.exports = function whitespaceSplit (str) {
  if (typeof str !== 'string') {
    throw new TypeError('whitespace-split expected a string')
  }

  return str.split(/\s+/).filter(isPresent)
}
