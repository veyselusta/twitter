const BaseService = require('./base-service')
const Tweet = require('../models/Tweet')

class TweetService extends BaseService {
  async findByTweetId(tweetId){
    const tweet = await this.find(tweetId)

    return tweet
  }
}

module.exports = new TweetService(Tweet)