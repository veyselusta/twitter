const userDatabase = require('../database')
const User = require('../models/User')

const router = require('express').Router()


router.get('/:userId', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  if(!user) res.send('oww')

  res.render('user', { user })
})

router.get('/:userId/followers', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  const followers = user.followers

  res.render('followers', { followers })
})

router.get('/:userId/followings', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  const followings = user.following

  res.render('followings', { followings })
})

router.get('/:userId/likes', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  const likes = user.likedTweets

  res.render('likes', { likes })
})

router.get('/:userId/reply', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  const replies = user.replies

  res.render('replies', { replies })
})

router.post('/:userId/reply', async(req,res)=>{
  const { userId } = req.params
  const { text, tweetId } = req.body

  const user = await userDatabase.find(userId)
  const tweet = await userDatabase.findTweetById(tweetId)

  user.reply(tweet, text)
  await userDatabase.update(user)

  res.send('ok')
})


router.post('/:userId/follow', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  const other = await userDatabase.find(req.body.otherId)

  user.follow(other)
  
  await userDatabase.update(user)
  await userDatabase.update(other)

  res.send('ok')
})

router.post('/:userId/like', async (req,res)=>{
  const { userId } = req.params
  const { tweetId } = req.body

  const user = await userDatabase.find(userId)
  const tweet = await userDatabase.findTweetById(tweetId)

  if(!user || !tweet) throw new Error('hata')

  user.like(tweet)
  userDatabase.update(user)
  
  res.send('ok')
})

router.post('/:userId/tweet', async (req,res)=>{
  const { userId } = req.params
  const { text } = req.body

  const user = await userDatabase.find(userId)

  user.tweet(text)
  userDatabase.update(user)
  
  res.send('ok')
})


module.exports = router