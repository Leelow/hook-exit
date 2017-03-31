const exit = process.exit

module.exports.exit = exit

module.exports.hook = function (handler) {
  process.exit = function () {
    if (typeof handler === 'function') handler.apply(null, arguments)
  }
}

module.exports.unhook = function () {
  process.exit = exit
}
