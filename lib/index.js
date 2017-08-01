let lexer = require('./lexer')

module.exports = function (data) {
  data = data.toString()
  let output = lexer(data)
  console.log(output)
}
