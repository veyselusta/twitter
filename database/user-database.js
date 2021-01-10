const BaseDatabase = require('./base-database')
const User = require('../models/User')

class UserDatabase extends BaseDatabase {

  async findByName(name) {
    const data = await this.load()

    return data.find(obj=> obj.name == name)
  }
}

module.exports = new UserDatabase(User)