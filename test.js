'use strict';
var test = require('ava');
var metal = require('./');

test('returns a random metal name', function (t) {
	t.assert(metal().length > 0);
});

test('returns a two-part name', function (t) {
	t.assert(metal().indexOf(' ') !== -1);
});
