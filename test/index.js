import { app, server, request } from './common'

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
