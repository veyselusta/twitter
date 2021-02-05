const express = require('express')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const threadRouter = require('./routes/thread')
const searchRouter = require('./routes/thread')


require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())


app.use('/', indexRouter)
app.use('/search', searchRouter)
app.use('/user', userRouter)
app.use('/thread', threadRouter)

module.exports = app
