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

  find(id) {
    return this.load().find(o => o.id == id)
  }

  update(object) {
    const objects = this.load()

    const index = objects.findIndex(o => o.id == object.id)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    this.save(objects)
  }
  
  remove (index) {
    const data = load(filename)
    data.splice(index,1)
    save(filename, data)
  }

}

module.exports = BaseDatabase