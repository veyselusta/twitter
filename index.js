const express = require('express')
const bodyParser = require('body-parser')

const homeRouter = require('./routes/home')

const app = express()

app.set('view engine', 'pug')

app.use(bodyParser.json())

app.use('home', homeRouter)

app.listen(3000, ()=>{
  console.log('server ayaklandı')
})


