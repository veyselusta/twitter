const app = require('../..')
const request = require('supertest')(app)

test('like', async (done)=>{
    const userToCreate = {
      name : 'veysel',
      username : 'bir',
      age : 24
    }

    const userToCreateSecond = {
      name : 'kutlay',
      username : 'iki',
      age : 23
    }

  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)
    
  const userResponseSecond = await request
    .post('/user/create')
    .send(userToCreateSecond)
    .expect(200)
    
  const followResponse = await request
    .post(`/user/${userResponse.body._id}/follow`)
    .send({ userId: userResponse.body._id, otherId: userResponseSecond.body._id })
    .expect(200)

  expect(followResponse.body.following[0]).toMatchObject(userToCreateSecond)

  done()

})