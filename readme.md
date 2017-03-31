# hook-exit

<!--- [![NPM downloads][downloads-image]][downloads-url] --->
<!--- [![Build Status][travis-image]][travis-url] --->
<!--- [![Build Status][appveyor-image]][appveyor-url] --->
<!--- [![Dependencies][dependencies-image]][dependencies-url] --->
<!--- [![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url] --->
<!--- [![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url] --->

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

<!--- [downloads-image]: https://img.shields.io/npm/dt/nightmare-screenshot-selector.svg?maxAge=3600 --->
<!--- [downloads-url]: https://www.npmjs.com/package/nightmare-screenshot-selector --->
<!--- [travis-image]: https://travis-ci.org/Leelow/nightmare-screenshot-selector.svg?branch=master --->
<!--- [travis-url]: https://travis-ci.org/Leelow/nightmare-screenshot-selector --->
<!--- [appveyor-image]: https://ci.appveyor.com/api/projects/status/qd3uu82sk5qc41ii?svg=true --->
<!--- [appveyor-url]: https://ci.appveyor.com/project/Leelow/nightmare-screenshot-selector --->
<!--- [codacy-grade-image]: https://api.codacy.com/project/badge/Grade/290aa0752e4643dd8200c6a1d2a90e29 --->
<!--- [codacy-grade-url]: https://www.codacy.com/app/Leelow/nightmare-screenshot-selector?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/nightmare-screenshot-selector&amp;utm_campaign=Badge_Grade --->
<!--- [dependencies-image]: https://david-dm.org/leelow/nightmare-screenshot-selector/status.svg --->
<!--- [dependencies-url]: https://david-dm.org/leelow/nightmare-screenshot-selector?type=dev --->
<!--- [dev-dependencies-image]: https://david-dm.org/leelow/nightmare-screenshot-selector/dev-status.svg --->
<!--- [dev-dependencies-url]: https://david-dm.org/leelow/nightmare-screenshot-selector?type=dev --->
<!--- [javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg --->
<!--- [javascript-standard-url]: http://standardjs.com/ --->
