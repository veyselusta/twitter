const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase {
  constructor(model){
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    fs.writeFileSync(`./database/${this.filename}.json`, flatted.stringify(objects,null,2))
  }
  
  load() {
    const file = fs.readFileSync(`./database/${this.filename}.json`, 'utf8')
    const objects = flatted.parse(file)

    return objects.map(this.model.create)
  }
  
  insert(object) {
    const data = this.load()
    this.save(data.concat(object))
  }
  
  remove (index) {
    const data = load(filename)
    data.splice(index,1)
    save(filename, data)
  }

}

module.exports = BaseDatabase