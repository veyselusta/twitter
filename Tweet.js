
class Tweet{
  constructor(user,text){
    this.user = user
    this.text = text
    this.createDate = new Date().toLocaleDateString()
    this.likedBy = []
    this.replies = []
    this.retweets =[]
    this.original = []
  }
}