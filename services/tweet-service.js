const BaseService = require('./base-service')
const Tweet = require('../models/Tweet')

class TweetService extends BaseService {

  async findByName(name) {
    return this.findBy('name', name)
  }

  async findByUserId(userId){
    this.findBy('id',userId)
  }
  
}

module.exports = new TweetService(Tweet)