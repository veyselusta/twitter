const router = require('express').Router()
const userDatabase = require('../database')


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



module.exports = router