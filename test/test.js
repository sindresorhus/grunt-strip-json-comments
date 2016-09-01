'use strict';
/* eslint-env mocha */
var assert = require('assert');
var grunt = require('grunt');

it('should strip JSON comments', function () {
	var actual = grunt.file.read('test/tmp/stripped.json');
	var expected = grunt.file.read('test/fixture/expected.json');
	assert.equal(actual, expected);
});

it('should strip JSON comments and whitespace', function () {
	var actual = grunt.file.read('test/tmp/nowhitespace.json');
	var expected = grunt.file.read('test/fixture/nowhitespace.json');
	assert.equal(actual, expected);
});
