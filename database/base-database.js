const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase {
  constructor(model){
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    return new Promise((resolve,reject) => {
      fs.writeFileSync(`./database/${this.filename}.json`, flatted.stringify(objects,null,2),(err)=>{
        if(err) return reject()
        resolve()
      })
    })
  }
  
  load() {
    return new Promise((resolve,reject)=>{
      const file = fs.readFileSync(`./database/${this.filename}.json`, 'utf8',(err,file)=>{
        resolve(objects.map(this.model.create))
      })
    })
  }
  
  insert(object) {
    const objects = this.load()
    this.save(objects.concat(object))
  }

  find(id) {
    return this.load().find(o => o.id == id)
  }

  update(object) {
    const objects = this.load()
    const index = objects.findIndex(o => o.id == object.id)
    
    objects.splice(index, 1, object)
    this.save(objects)
  }
  
  remove (index) {
    const objects = this.load()
    objects.splice(index,1)
    this.save(objects)
  }

}

module.exports = BaseDatabase