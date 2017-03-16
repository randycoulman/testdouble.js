const create = require('../create')

module.exports = function () {
  const captor = {
    capture: create({
      name: 'captor.capture',
      matches (matcherArgs, actual) {
        captor.values = captor.values || []
        captor.values.push(actual)
        captor.value = actual
        return true
      }
    })
  }
  return captor
}
