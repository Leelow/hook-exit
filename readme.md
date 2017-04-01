# hook-exit

[![Greenkeeper badge](https://badges.greenkeeper.io/Leelow/hook-exit.svg)](https://greenkeeper.io/)
[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

An easy way to hook process.exit().

## Install

```
$ npm install --save hook-exit
```

## Usage

```js
const exit = require('hook-exit');

exit.hook(function() {  // exit is disable
  console.log('I do not want to exit !');
})

process.exit(); 

exit.unhook();  // exit is enable

process.exit();

```

## Test and coverage
You just have to clone the repo and run

```
$ npm test
$ npm run coverage
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[downloads-image]: https://img.shields.io/npm/dt/hook-exit.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/hook-exit
[travis-image]: https://travis-ci.org/Leelow/hook-exit.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/hook-exit
[appveyor-image]: https://ci.appveyor.com/api/projects/status/32aj3ap0kelnbdqt?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/hook-exit
[codacy-grade-image]: https://api.codacy.com/project/badge/Grade/be1d56eb162d41a586ecac79685161f7
[codacy-grade-url]: https://www.codacy.com/app/Leelow/hook-exit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/hook-exit&amp;utm_campaign=Badge_Grade
[dependencies-image]: https://david-dm.org/leelow/hook-exit/status.svg
[dependencies-url]: https://david-dm.org/leelow/hook-exit?type=dev
[dev-dependencies-image]: https://david-dm.org/leelow/hook-exit/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/hook-exit?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
