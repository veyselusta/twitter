class Tweet{
  constructor(user,text){
    this.user = user
    this.text = text
    this.createdAt = new Date().toLocaleDateString()
    this.likedBy = []
    this.replies = []
    this.retweets =[]
  }
}

module.exports = Tweet