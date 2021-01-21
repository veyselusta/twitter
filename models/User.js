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