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

  const text = 'like test'
  
  const userResponse = await request
    .post('/user/create')
    .send(userToCreate)
    .expect(200)
    
  const userResponseSecond = await request
    .post('/user/create')
    .send(userToCreateSecond)
    .expect(200)

  const tweetResponse = await request
    .post(`/user/${userResponse.body._id}/tweet`)
    .send({ text, userId: userResponse.body._id })
    .expect(200)
    
  const likeResponse = await request
    .post(`/user/${userResponseSecond.body._id}/like`)
    .send({ tweetId: tweetResponse.body._id, userId: userResponseSecond.body._id })
    .expect(200)
    
    expect(likeResponse.body.likedBy[0]).toMatchObject(userToCreateSecond)//userReponseSecond.body dene

  done()

})