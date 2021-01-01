const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase {
  constructor(model){
    this.model = model
    this.filename = model.name
  }
  
  save(objects) {
    fs.writeFileSync(`./${this.filename}.json`, flatted.stringify(objects,null,2))
  }
  
  load() {
    const file = fs.readFileSync(`./${this.filename}.json`, 'utf8')
    const objects = flatted.parse(file)

    return objects.mao(this.model.create)
  }
  
  insert(object) {
    const data = load()
    save(filename,data.concat(object))
  }
  
  remove (index) {
    const data = load(filename)
    data.splice(index,1)
    save(filename, data)
  }

}

module.exports = BaseDatabase