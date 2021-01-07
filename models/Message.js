class Message {
  constructor(message,author){
    this.message = message
    this.author = author
    this.createdAt = new Date().toLocaleDateString()
  }
}

module.exports = Message