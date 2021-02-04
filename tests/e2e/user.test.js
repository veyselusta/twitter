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

  await request.get(`/user/${userResponse.body._id}`).expect(200)
  await request.get(`/user/${userResponse.body._id}/followers`).expect(200)
  await request.get(`/user/${userResponse.body._id}/followings`).expect(200)
  await request.get(`/user/${userResponse.body._id}/likes`).expect(200)
  await request.get(`/user/${userResponse.body._id}/reply`).expect(200)

  expect(userResponse.body).toMatchObject(userToCreate)

  done()
})