class Message {
  constructor(message){
    this.message = message
    this.creaDate = new Date().toLocaleDateString()
    this.user = []
  }
}

module.exports = Message