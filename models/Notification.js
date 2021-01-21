const mongoose = require('mongoose')

const NotificationSchmea = new mongoose.Schema({
  author : Object,
  item : Object,
  type : String
})

module.exports = mongoose.model('Notification', NotificationSchmea)
