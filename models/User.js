const Tweet = require('./Tweet.js')
const Notification = require('./Notification.js')
const Message = require('./Message.js')
const uuid = require('uuid')


class User {
  constructor({
  name,
  username,
  location,
  website,
  mail,
  profilephoto,
  backgroundphoto,
  bio,
  birth,
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
    this.website = website
    this.location = location
    this.mail = mail
    this.profilephoto = profilephoto
    this.backgroundphoto = backgroundphoto
    this.bio = bio
    this.birth = birth
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
}

retweet(tweet){
  tweet.retweets.push(this)
  this.tweets.push(tweet)

  const newNotification = new Notification(this,'retweet',tweet) 
  tweet.user.notifications.push(newNotification)
}

pinTweet(tweet){
  this.pinnedTweet.push(tweet)
}

like(tweet){
  this.likedTweets.push(tweet)

  const newNotification = new Notification(this,'like',tweet)
  tweet.user.notifications.push(newNotification)
}

reply(tweet, text){
  const replyTweet = new Tweet(this,text)
  replyTweet.replies.push(tweet)

  const newNotification = new Notification(this,'reply',replyTweet)
  tweet.user.notifications.push(newNotification)
}

sendDirectMessage(message, user){
  const dm = new Message(message)

  this.directMessages.push(dm)
  user.directMessages.push(dm)
  dm.user.push(this)

  const newNotification = new Notification(this,'direct message',dm)
  user.notifications.push(newNotification)
}

static create({ 
  name,
  username,
  location,
  website,
  mail,
  profilephoto,
  backgroundphoto,
  bio,
  birth,
  createDate,
  followers,
  following,
  directMessages,
  tweets,
  likedTweets,
  pinnedTweet,
  notifications
})
  
  {
  return new User({
    name,
    username,
    location,
    website,
    mail,
    profilephoto,
    backgroundphoto,
    bio,
    birth,
    createDate,
    followers,
    following,
    directMessages,
    tweets,
    likedTweets,
    pinnedTweet,
    notifications
  })
}

}

module.exports = User


