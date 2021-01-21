const User = require('./models/User.js')
const userDatabase = require('./services/user-services.js')

async function run(){
  const tweet = await userDatabase.findTweetById('ef3cdb22-0327-497a-a235-24caebbba19b')
  //veysel.tweet('new tweet')
  //await userDatabase.update(veysel)
  //const deneme12 = await userDatabase.find('445beec0-78fd-491c-87d9-bd04303b5c06')
  //veysel.tweets[0].replies.push(['a'])

  console.log(tweet)
}
run()

