const User = require('./models/User.js')
const UserDatabase = require('./database/user-database.js')

async function run(){
  const veysel = await UserDatabase.findByName('veysel')
  veysel.tweet('new tweet')
  await UserDatabase.update(veysel)
}
run()


