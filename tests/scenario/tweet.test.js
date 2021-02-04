const app = require('../..')
const request = require('supertest')(app)

test('user and tweet', async (done)=>{
  const userToCreate = {
    name : 'test-person',
    username : 'tester',
    age : 23
  }

  const text = 'merhaba dünya'

  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)

    const tweetResponse = await request
    .post(`/user/${userResponse.body._id}/tweet`)
    .send({ text, userId: userResponse.body._id })
    .expect(200)

    await request.get(`/user/status/${tweetResponse.body._id}`).expect(200)

    expect(tweetResponse.body).toMatchObject({
      user: userResponse.body,
      text
    })
  
  done()

})