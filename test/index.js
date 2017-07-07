import { app, server } from '../src/index'
import request from 'supertest'

describe('Boot Basic Server', () => {
  after(() => {
    server.close()
  })

  it('should return 200 when hitting the index', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})
