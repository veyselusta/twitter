const { tweetService } = require('../services')

const router = require('express').Router()


router.get('/', async (req,res)=>{
  const tweets = await tweetService.load()
  
  res.render('thread', { tweets })
})

module.exports = router