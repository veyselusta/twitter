const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  message : String,
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  },
  createdAt : String
})

MessageSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Message', MessageSchema)