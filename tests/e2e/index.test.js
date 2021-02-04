const app = require('../..')
const request = require('supertest')(app)

test('index', async (done)=>{
  await request.get(`/`).expect(200)

  done()
})