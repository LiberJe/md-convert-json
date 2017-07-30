const fs = require('fs')
const md2json = require('./lib')

fs.readFile('test.md', (err, data) => {
  if (err) {
    console.log(err)
  }

  md2json(data)
})

module.exports = md2json
