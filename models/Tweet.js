const uuid = require('uuid')

class Tweet{
  constructor(user,text, id = uuid.v4()){
    this.user = user
    this.id = id
    this.text = text
    this.createdAt = new Date().toLocaleDateString()
    this.likedBy = []
    this.replies = []
    this.retweets =[]
  }
}

module.exports = Tweet