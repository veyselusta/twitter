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

const remove = (filename, index) => {
  const data = load(filename)
  data.splice(index,1)
  save(filename, data)
}

const findByName = (filename, name) => {
  const data = load(filename)
  return data.find((obj)=> obj.name == name)
}

module.exports = {save, load, insert, remove, findByName}