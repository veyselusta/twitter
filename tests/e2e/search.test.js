const app = require('../..')
const request = require('supertest')(app)

test('search', async (done)=>{
  await request.get(`/search`).expect(200)

  done()
})