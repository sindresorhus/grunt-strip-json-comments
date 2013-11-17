'use strict';
var strip = require('strip-json-comments');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripJsonComments', 'Strip comments from JSON', function () {
		this.files.forEach(function (el) {
			grunt.file.write(el.dest, strip(grunt.file.read(el.src)));
		});
	});
};
