# grunt-strip-json-comments [![Build Status](https://secure.travis-ci.org/sindresorhus/grunt-strip-json-comments.png?branch=master)](http://travis-ci.org/sindresorhus/grunt-strip-json-comments)

> Strip comments from JSON. Lets you use comments in your JSON files!

Using the [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) module.

This is now possible:

```js
{
	// rainbows
	"unicorn": /* ❤ */ "cake"
}
```


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev grunt-strip-json-comments
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-strip-json-comments');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: http://gruntjs.com/getting-started


## Example config

```js
grunt.initConfig({
	stripJsonComments: {								// Task
		dist: {											// Target
			files: {									// Dictionary of files
				'without.json': 'with-comments.json'	// 'destination': 'source'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-strip-json-comments');
grunt.registerTask('default', ['stripJsonComments']);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
