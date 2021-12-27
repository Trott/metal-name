#!/usr/bin/env node
'use strict'
const meow = require('meow')
const metal = require('./')

meow({
  help: [
    'Examples',
    '  $ metal-name',
    '  Desecrated Glory'
  ].join('\n')
})

console.log(metal())
