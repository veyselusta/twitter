const express = require('express')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())


app.use('/', indexRouter)

app.use('/user', userRouter)

app.listen(3000, ()=>{
  console.log('server ayaklandı')
})


