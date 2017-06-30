# metal-name [![Build Status](https://travis-ci.org/Trott/metal-name.svg?branch=master)](https://travis-ci.org/Trott/metal-name)

> Heavy metal band name generator

## Install

```
$ npm install --save metal-name
```


## Usage

```js
var metal = require('metal-name');

metal();
//=> 'Twisted Vengeance'

metal({ fragment: 'start'});
//=> 'Twisted'

metal({ fragment: 'end' });
//=> 'Vengeance'
```


## API

### metal([options])

Type: `string`

Random heavy metal band name.

Options:
* `fragment`: With value 'start' or 'end', generate only that part of the name


## CLI

```
$ npm install --global metal-name
```

```
$ metal-name --help

  Examples
    $ metal-name
    Desecrated Glory
```

## License

MIT © [Rich Trott](https://trott.github.io)

## Acknowledgments

* The code for [superb](https://github.com/sindresorhus/superb) served as a starting point

### Word Fragments Contributed By

* [Rich Trott](https://github.com/Trott)
