'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		stripJsonComments: {
			strip: {
				files: {
					'test/tmp/stripped.json': 'test/fixture/original.json'
				}
			},
			nowhitespace: {
				files: {
					'test/tmp/no-whitespace.json': 'test/fixture/no-whitespace.json'
				},
				options: {
					whitespace: false
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'stripJsonComments', 'simplemocha', 'clean']);
};
