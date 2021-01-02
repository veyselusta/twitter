const User = require('./models/User.js')
const UserDatabase = require('./database/user-database')


const veysel = new User({
  name : 'veysel',
  username : 'veysel15',
  mail : 'vyslusta1@gmail.com',
  bio : 'hello twitter'
})

const kutlay = new User({
  name : 'kutlay',
  username : 'kutlay_12',
})




veysel.tweet('hello world')
veysel.tweet('everything is gonna be alright')

kutlay.tweet('hello @veysel')
kutlay.tweet('i love javascript')

veysel.follow(kutlay)
kutlay.follow(veysel)

veysel.reply(kutlay.tweets[1], 'You were supposed to write JavaScript respect please')

veysel.retweet(kutlay.tweets[1])

veysel.like(kutlay.tweets[0])

veysel.pinTweet(veysel.tweets[1])

veysel.sendDirectMessage('how are you today')
kutlay.sendDirectMessage('i am good what about you')

UserDatabase.save([veysel,kutlay])
const users = UserDatabase.load()

const test = users[0].directMessages

console.log(users[0].following)
