#!/usr/bin/env node
'use strict';
var meow = require('meow');
var metal = require('./');

meow({
	help: [
		'Examples',
		'  $ metal-name',
		'  Desecrated Glory'
	].join('\n')
});

console.log(metal());
