/* eslint-env mocha */
const assert = require('assert')
const exit = require('./index.js')

describe('ScreenshotSelector', function () {
  afterEach(function () {
    exit.unhook()
  })

  it('should prevent exit', function () {
    exit.hook()
    process.exit()
  })

  it('should prevent exit and exec the handler', function (done) {
    exit.hook(done)
    process.exit()
  })

  it('should restore exit', function () {
    var processsExit = process.exit
    exit.hook()
    assert.notEqual(process.exit, processsExit)
    exit.unhook()
    assert.equal(process.exit, processsExit)
  })
})
