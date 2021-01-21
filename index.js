const express = require('express')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const threadRouter = require('./routes/thread')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())


app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/thread', threadRouter)

app.listen(3000, ()=>{
  console.log('server ayaklandı')
})


