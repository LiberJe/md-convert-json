/**
 * Transforming data into json
 */

function traverse (data, output) {
  for (let i = 0; i < data.length; i++) {
    if (data.children.length > 0) {

      return traverse(data.children, output)
    } else {
      return output
    }
  }
}

function parser (data) {
  return data
}

module.exports = parser
