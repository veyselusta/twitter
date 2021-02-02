const printTweetHistory = require('../print-tweet-history')
const colors = require('colors')

test('prints user tweets', () => {
  const user = {
    name : 'Veysel',
    tweets: [{
      text : 'Merhaba',
      user : { name : 'Veysel'}
    }]
  }

  const consoleSpy = jest.spyOn(console, 'log')
  const colorBlueSpy = jest.spyOn(colors, 'blue')
  printTweetHistory(user)

  expect(consoleSpy).toHaveBeenCalledWith('Veysel tweeted Merhaba')
  expect(colorBlueSpy).toHaveBeenCalledWith('Veysel')
  consoleSpy.mockRestore()
})

test('prints warning when there isnt tweets', () => {
  const user = {
    name : 'Veysel',
    tweets: []
  }

  const consoleSpy = jest.spyOn(console, 'log')
  printTweetHistory(user)

  expect(consoleSpy).toHaveBeenCalledWith('Veysel has no tweets yet.')
  consoleSpy.mockRestore()
});