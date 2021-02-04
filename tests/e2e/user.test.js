const app = require('../..')
const request = require('supertest')(app)

test('user and tweet', async (done)=>{
  const userToCreate = {
    name : 'test-person',
    username : 'tester',
    age : 23
  }

  const userResponse = await request
  .post('/user/create')
  .send(userToCreate)
  .expect(200)

  expect(userResponse.body).toMatchObject(userToCreate)

  done()
})