const app = require('../..')
const request = require('supertest')(app)

test('retweet', async (done)=>{
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

  const text = 'test tweet'
  const replyText = 'reply'
  
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
    
  const retweetResponse = await request
    .post(`/user/${userResponse.body._id}/retweet`)
    .send({ tweetId: tweetResponse.body._id, userId: userResponseSecond.body._id })
    .expect(200)
    
    expect(retweetResponse.body.user).toMatchObject(userToCreate)

  done()

})