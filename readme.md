# grunt-strip-json-comments [![Build Status](https://travis-ci.org/sindresorhus/grunt-strip-json-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-strip-json-comments)

> Strip comments from JSON. Lets you use comments in your JSON files!

Using the [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) module.

This is now possible:

```js
{
	// rainbows
	"unicorn": /* ❤ */ "cake"
}
```


## Install

```sh
$ npm install --save-dev grunt-strip-json-comments
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	stripJsonComments: {
		dist: {
			files: {
				'without.json': 'with-comments.json'
			}
		}
	}
});

grunt.registerTask('default', ['stripJsonComments']);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
