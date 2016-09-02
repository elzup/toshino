# toshino [![Build Status](https://travis-ci.org/elzup/toshino.svg?branch=master)](https://travis-ci.org/elzup/toshino)

> Printing cute toshino


## Install

```
$ npm install --save toshino
```


## Usage

```js
const toshino = require('toshino');

toshino('unicorns');
//=> 'unicorns & rainbows'
```


## API

### toshino(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global toshino
```

```
$ toshino --help

  Usage
    toshino [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ toshino
    unicorns & rainbows
    $ toshino ponies
    ponies & rainbows
```


## License

MIT © [elzup](http://elzup.com)
