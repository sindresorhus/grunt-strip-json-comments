# grunt-strip-json-comments

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

```
$ npm install --save-dev grunt-strip-json-comments
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	stripJsonComments: {
		dist: {
			options: {
				whitespace: true
			},
			files: {
				'without.json': 'with-comments.json'
			}
		}
	}
});

grunt.registerTask('default', ['stripJsonComments']);
```


## Options

See the `strip-json-comments` [options](https://github.com/sindresorhus/strip-json-comments#options).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
