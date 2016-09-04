'use strict';
var stripJsonComments = require('strip-json-comments');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripJsonComments', 'Strip comments from JSON', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			grunt.file.write(el.dest, stripJsonComments(grunt.file.read(el.src), options));
		});
	});
};
