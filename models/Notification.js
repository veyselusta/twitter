const mongoose = require('mongoose')

const NotificationSchmea = new mongoose.Schema({
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    autopopulate : { maxDepth : 1 }
  },
  item : Object,
  type : String
})

NotificationSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Notification', NotificationSchmea)
