const User = require('./models/User.js')
const userDatabase = require('./database/user-database.js')

async function run(){
  const veysel = await userDatabase.findByName('veysel')
  veysel.tweet('new tweet')
  await userDatabase.update(veysel)
  console.log(veysel)
}
run()

