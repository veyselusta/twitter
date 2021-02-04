const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
  createdAt : Date,
  text : { type : String, required : true},

  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  },

  likedBy : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  }],

  replies : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 1 }
  }],

  retweets : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Tweet',
    autopopulate : { maxDepth : 1 }
  }],
})

TweetSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Tweet', TweetSchema)
