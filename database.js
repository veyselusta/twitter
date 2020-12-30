const fs = require('fs')
const flatted = require('flatted')

const save = (filename, object) => {
  fs.writeFileSync(`./${filename}.json`, flatted.stringify(object,null,2))
}

const load = (filename) => {
  const file = fs.readFileSync(`./${filename}.json`, 'utf8')
  return flatted.parse(file)
}

module.exports = {save, load}