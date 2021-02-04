const app = require('../..')
const request = require('supertest')(app)

test('pin', async (done)=>{
  const userToCreate = {
    name : 'pinUser',
    username : 'tester',
    age : 23
  }

  const text = 'pin'

  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)

    const tweetResponse = await request
    .post(`/user/${userResponse.body._id}/tweet`)
    .send({ text, userId: userResponse.body._id })
    .expect(200)

    const pinResponse = await request
    .post(`/user/${userResponse.body._id}/pintweet`)
    .send({ tweetId: tweetResponse.body._id, userId: userResponse.body._id })
    .expect(200)
  console.log(userResponse.body)
  console.log(pinResponse.body)
  expect(pinResponse.body.user).toMatchObject(userToCreate)
  
  done()

})