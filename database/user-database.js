const BaseDatabase = require('./base-database')
const User = require('../models/User')

class UserDatabase extends BaseDatabase {

  findByName(name) {
    const data = this.load()

    return data.find(obj=> obj.name == name)
  }
}

module.exports = new UserDatabase(User)