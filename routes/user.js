const router = require('express').Router()
const userDatabase = require('../database')


router.get('/:userId', async (req,res)=>{
  const user = await userDatabase.find(req.params.userId)
  if(!user) res.send('oww')
  res.render('user', { user })
})

router.get('/:userId/followers', async (req,res)=>{
  const followers = await (userDatabase.find(req.params.userId)).followers
  res.render('followers', { followers })
})



module.exports = router