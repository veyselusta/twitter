const app = require('../..')
const request = require('supertest')(app)

test('update', async (done)=>{
  const userToCreate = {
    name : 'test-person',
    username : 'tester',
    age : 23
  }

  const removeBy = '_id'

  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)

  const updateResponse = await request
    .delete(`/user/${userResponse.body._id}`)
    .send({ userId: userResponse.body._id, removeBy })
    .expect(200)

  expect(!userResponse)

  done()
})