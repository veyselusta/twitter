const {userService } = require('../services')

const router = require('express').Router()

router.get('/:userId', async (req,res)=>{
  const user = await userService.find(req.params.userId)
  if(!user) res.send('oww')

  res.render('user', { user })
})

router.get('/:userId/followers', async (req,res)=>{
  const user = await userService.find(req.params.userId)
  const followers = user.followers

  res.render('followers', { followers })
})

router.get('/:userId/followings', async (req,res)=>{
  const user = await userService.find(req.params.userId)
  const followings = user.following

  res.render('followings', { followings })
})

router.get('/:userId/likes', async (req,res)=>{
  const user = await userService.find(req.params.userId)
  const likes = user.likedTweets

  res.render('likes', { likes })
})

router.get('/:userId/reply', async (req,res)=>{
  const user = await userService.find(req.params.userId)
  const replies = user.replies

  res.render('replies', { replies })
})

router.post('/create', async(req,res)=>{
  const user = await userService.insert(req.body)

  res.send(user)
})

router.post('/:userId/tweet', async (req,res)=>{
  const { userId } = req.params
  const { text } = req.body

  const tivit = await userService.tweet(text, userId)

  res.send(tivit)
})

router.post('/:userId/reply', async(req,res)=>{
  const { userId } = req.params
  const { text, tweetId } = req.body

  await user.reply(userId, tweetId)

  res.send('ok')
})

router.post('/:userId/follow', async (req,res)=>{
  const { userId } = req.params
  const { otherId } = req.body

  await userService.follow(userId, otherId)

  res.send('ok')
})

router.post('/:userId/like', async (req,res)=>{
  const { userId } = req.params
  const { tweetId } = req.body

  const tweet =await userService.like(userId, tweetId)
  
  res.send(tweet)
})

router.patch('/:userId', async (req,res)=>{
  const { userId } = req.params
  const { name } = req.body
  
  await userService.update(userId, { name })
  res.send('ok')
})

router.delete('/:userId/delete', async (req,res)=>{
  await userService.removeBy('_id', req.params.userId)

  res.send('ok')
})

module.exports = router