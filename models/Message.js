const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  message : String,
  author : Object,
  createdAt : String
})

module.exports = mongoose.model('Message', MessageSchema)