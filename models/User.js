const Tweet = require('./Tweet.js')
const Notification = require('./Notification.js')
const Message = require('./Message.js')
const uuid = require('uuid')

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name : { type : String, required : true},
  username : {type : String, required : true},
  age : { type : Number, required : true, min : 18},

  replies : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 1 }
  }],

  followers : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  }],

  following : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  }],

  directMessages : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Message',
    autopopulate : { maxDepth : 1 }
  }],

  tweets : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 2 }
  }],

  likedTweets : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 1 }
  }],

  pinnedTweet : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 1 }
  }],

  notifications : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Notification',
    autopopulate : { maxDepth : 1 }
  }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', UserSchema)

/*class User {
  constructor({
  name,
  username,
  replies = [],
  followers = [],
  following = [],
  directMessages = [],
  tweets = [],
  likedTweets = [],
  pinnedTweet = [],
  notifications = [],
  id = uuid.v4()
  })
  {
    this.name = name
    this.username = username
    this.replies = replies
    this.id = id
    this.followers = followers
    this.following = following
    this.directMessages = directMessages
    this.tweets = tweets
    this.likedTweets = likedTweets
    this.pinnedTweet = pinnedTweet
    this.notifications = notifications
    this.createdAt = new Date().toLocaleDateString()
  }

follow(user){
  this.following.push(user)
  user.followers.push(this)

  const newNotification = new Notification(this,'follow') 
  this.notifications.push(newNotification)
}

tweet(text){
  const tweet = new Tweet(this,text)
  this.tweets.push(tweet)

  return tweet
}

retweet(tweet){
  tweet.retweets.push(this)
  this.tweets.push(tweet)

  const newNotification = new Notification(this,'retweet',tweet) 
  tweet.user.notifications.push(newNotification)

  return tweet
}

pinTweet(tweet){
  this.pinnedTweet.push(tweet)

  return tweet
}

like(tweet){
  this.likedTweets.push(tweet)

  const newNotification = new Notification(this,'like',tweet)
  tweet.user.notifications.push(newNotification)

  return tweet
}

reply(tweet, text){
  const replyTweet = new Tweet(this,text)
  this.replies.push(replyTweet)
  tweet.replies.push(replyTweet)

  const newNotification = new Notification(this,'reply',replyTweet)
  tweet.user.notifications.push(newNotification)

  return replyTweet
}

sendDirectMessage(message, user){
  const dm = new Message(message,this)

  this.directMessages.push(dm)
  user.directMessages.push(dm)

  const newNotification = new Notification(this,'dm',dm)
  user.notifications.push(newNotification)

  return dm
}

static create({ 
  name,
  username,
  replies,
  createDate,
  followers,
  following,
  directMessages,
  tweets,
  likedTweets,
  pinnedTweet,
  notifications,
  id
})
  
  {
  return new User({
    name,
    username,
    replies,
    createDate,
    followers,
    following,
    directMessages,
    tweets,
    likedTweets,
    pinnedTweet,
    notifications,
    id
  })
}

}

module.exports = User

*/
