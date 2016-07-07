# whitespace-split [![Build Status](https://secure.travis-ci.org/johnotander/whitespace-split.svg?branch=master)](https://travis-ci.org/johnotander/whitespace-split) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Split a string into words based on whitespace

## Installation

```bash
npm install --save whitespace-split
```

## Usage

```javascript
var whitespaceSplit = require('whitespace-split')

whitespaceSplit("\t\n this is\na\t\tgroup of words\n\t\n")
// => ['this', 'is', 'a', 'group', 'of', 'words']
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
