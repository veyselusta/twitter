const app = require('../..')
const request = require('supertest')(app)

test('update', async (done)=>{
  const userToCreate = {
    name : 'test-person',
    username : 'tester',
    age : 23
  }

  const name = 'değiştir'

  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)

  const updateResponse = await request
    .patch(`/user/${userResponse.body._id}`)
    .send({ userId: userResponse.body._id, name: name })
    .expect(200)

  expect(updateResponse.body).toMatchObject({ name })

  done()
})