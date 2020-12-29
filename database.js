const fs = require('fs')

function save(filename, object){
  fs.writeFileSync(`./${filename}.json `, JSON.stringify(object,null,2))
}

function load(){
  
}

module.exports = {save, load}