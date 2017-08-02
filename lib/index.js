let lexer = require('./lexer')
let storage = require('./storage')
let parser = require('./parser')

module.exports = function (data) {
  data = data.toString()

  // markdown lexer
  let lexerData = lexer(data)

  // lexer storage
  let storageData = storage(lexerData)

  // storage parser
  let jsonData = parser(storageData)

  return jsonData
}
