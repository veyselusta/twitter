class Message {
  constructor(message){
    this.message = message
    this.createdAt = new Date().toLocaleDateString()
    this.user = []
  }
}

module.exports = Message