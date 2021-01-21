
const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  },
  text : String,
  createdAt : String,
  likedBy : [],
  replies : [],
  retweets : []
})

TweetSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Tweet', TweetSchema)
