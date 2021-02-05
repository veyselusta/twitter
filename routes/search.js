const router = require('express').Router()
const userService = require('../services/user-service')

router.get('/', async (req, res) => {
  const { username } = req.query

  const query = {}

  if (username) query.username = username

  const user = await userService.query(query)

  res.send(user)
})