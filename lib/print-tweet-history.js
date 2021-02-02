const colors = require('colors')

function printTweet(tweet) {
  console.log(`${colors.blue(tweet.user.name)} tweeted ${colors.bgRed.white(tweet.text)}`)
}

function printTweetHistory(user) {  
  if (user.tweets.length == 0)
    return console.log(`${colors.blue(user.name)} has no tweets yet.`)

  user.tweets.forEach(printTweet)
}

module.exports = printTweetHistory
