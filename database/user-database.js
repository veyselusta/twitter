const BaseDatabase = require('./base-database')
const User = require('../models/User')

class UserDatabase extends BaseDatabase {

  async findByName(name) {
    const objects = await this.load()

    return objects.find(obj=> obj.name == name)
  }

  async findTweetById(id){
    const objects = await this.load()

    const alTweets = objects.map((obj)=>obj.tweets)

    const tweet = alTweets.filter((tweets)=>{
     return tweets.some(tweet=>tweet.id == id)
    })

    const result = tweet[0].filter(tweet=>tweet.id == id)
    return result[0]
  }
}

module.exports = new UserDatabase(User)