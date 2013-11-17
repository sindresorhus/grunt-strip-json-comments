/*global describe, it */
'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should strip JSON comments', function () {
	var actual = grunt.file.read('test/tmp/stripped.json');
	var expected = grunt.file.read('test/fixture/expected.json');
	assert.equal(actual, expected);
});
