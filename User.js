const Tweet = require('./Tweet.js')
const Notification = require('./Notification.js')
const Message = require('./Message.js')



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
  createDate
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
    this.createDate = createDate
    this.followers = []
    this.following = []
    this.directMessages = []
    this.tweets = []
    this.likedTweets = []
    this.pinnedTweet = []
    this.notifications = []
  }

follow(user){
  this.following.push(user)
  user.followers.push(this)

  const newNotification = new Notification() 
  newNotification.follows.push(this)
  this.notifications.push(newNotification)
}

tweet(text){
  const tweet = new Tweet(this,text)
  this.tweets.push(tweet)
  
//  if(tweet.text.includes('@')){
//    const userName = filtered(tweet.text)
//    global.[userName].notifications.userTags.push(this)
//  }
}

retweet(tweet){
  tweet.retweets.push(this)
  this.tweets.push(tweet)

  const newNotification = new Notification() 
  newNotification.retweetBy.push(this)
  tweet.user.notifications.push(newNotification)
}

pinTweet(tweet){
  this.pinnedTweet.push(tweet)
}

like(tweet){
  this.likedTweets.push(tweet)

  const newNotification = new Notification()
  newNotification.likes.push(this)
  tweet.user.notifications.push(newNotification)
}

reply(tweet, text){
  const replyTweet = new Tweet(this,text)
  replyTweet.replies.push(tweet)

  const newNotification = new Notification()
  newNotification.mentions.push(this)
  tweet.user.notifications.push(newNotification)
}

sendDirectMessage(message){
  const dm = new Message(message)
  this.directMessages.push(dm)
  dm.user.push(this)

  const newNotification = new Notification()
  newNotification.messages.push(this)
  this.notifications.push(newNotification)
}

}

function filtered(str){
  return str.split(' ').filter((item)=>item.includes('@')).join('').slice(1)
}


module.exports = User


