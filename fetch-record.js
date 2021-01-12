const User = require('./models/User.js')
const userDatabase = require('./database/user-database.js')

async function run(){
  const veysel = await userDatabase.findByName('veysel')
  veysel.tweet('new tweet')
  await userDatabase.update(veysel)
  const deneme12 = await userDatabase.find('445beec0-78fd-491c-87d9-bd04303b5c06')
  console.log(deneme12)
}
run()

