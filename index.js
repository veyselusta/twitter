const User = require('./models/User.js')
const UserDatabase = require('./database/user-database.js')

const veysel = UserDatabase.findByName('veysel')

veysel.tweet('new tweet')
UserDatabase.update(veysel)

console.log(veysel)

