# soundgasm-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Unofficial API for soundgasm.net

## Installation

```sh
$ npm install --save soundgasm-api
```

## Usage

```js
const soundgasmApi = require('soundgasm-api');

let url = 'https://soundgasm.net/u/GateOfIvory/M-Sonnet-No-5';
soundgasmApi(url, sound => {
  console.log(sound.downloadURL);
  // => https://soundgasm.net/sounds/b949ed00caadb8ccac989de9885e37ef681610a9.m4a
});
```
## License

Apache-2.0 © squareguy


[npm-image]: https://badge.fury.io/js/soundgasm-api.svg
[npm-url]: https://npmjs.org/package/soundgasm-api
[travis-image]: https://travis-ci.org/squareguy/soundgasm-api.svg?branch=master
[travis-url]: https://travis-ci.org/squareguy/soundgasm-api
[daviddm-image]: https://david-dm.org/squareguy/soundgasm-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/squareguy/soundgasm-api
