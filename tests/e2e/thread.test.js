const app = require('../..')
const request = require('supertest')(app)
    
test('user and tweet', async (done)=>{
    await request.get(`/thread`).expect(200)

    done()
 })