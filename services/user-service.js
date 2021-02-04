const BaseService = require('./base-service')
const tweetService = require('./tweet-service')
const User = require('../models/User')

class UserService extends BaseService {

  async findByName(name) {
    return this.model.findBy('name', name)
  }

  async follow(userId, otherId){
    const user = await this.find(userId)
    const other = await this.find(otherId)

    user.following.push(other)
    other.followers.push(user)
    
    await user.save()
    await other.save()

    return user 
  }

  async reply(userId, tweetId, text){
    const user = await this.find(userId)
    const tweet = await tweetService.find(tweetId)
    const ownTweet = await tweetService.insert({ user, text })

    user.ownReplies.push(ownTweet)
    tweet.replies.push(ownTweet)

    await user.save()
    await tweet.save()
    
    return tweet
  }

  async tweet(text, userId){
    const user = await this.find(userId)
    const tweet = await tweetService.insert({ user, text })

    user.tweets.push(tweet)
    await user.save()
  
    return tweet
  }

  async retweet(userId, tweetId){
    const user = await this.find(userId)
    const tweet = await tweetService.find(tweetId)
    
    tweet.retweets.push(tweet)
    user.tweets.push(tweet)

    return tweet
  }

  async pinTweet(userId, tweetId){
    const user = await this.find(userId)
    const tweet = await tweetService.find(tweetId)

    user.pinnedTweets.push(tweet)

    await user.save()

    return tweet
  }

  async like(userId, tweetId){
    const user = await this.find(userId)
    const tweet = await tweetService.find(tweetId)

    user.likedTweets.push(tweet)
    tweet.likedBy.push(user)

    await user.save()
    await tweet.save()

    return tweet
  }
}

module.exports = new UserService(User)