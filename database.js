const fs = require('fs')
const flatted = require('flatted')

const save = (filename, object) => {
  fs.writeFileSync(`./${filename}.json`, flatted.stringify(object,null,2))
}

const load = (filename) => {
  const file = fs.readFileSync(`./${filename}.json`, 'utf8')
  return flatted.parse(file)
}

const insert = (filename, object) => {
  const data = load(filename)
  save(filename,data.concat(object))
}

module.exports = {save, load, insert}