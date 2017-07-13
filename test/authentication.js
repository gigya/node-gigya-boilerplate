import { app, server, request } from './common'

describe('Authentication', () => {

})

describe('Authentication Routes', () => {
  after(() => {
    server.close()
  })

  describe('login', () => {
    it('should respond with 200 ok', (done) => {
      request(app)
        .get('/login')
        .expect(200, done)
    })
    it('should make a request to gigya.login')
    it('should create a new session')
  })
  describe('logout', () => {
    it('should respond with 302', (done) => {
      request(app)
        .get('/logout')
        .expect(302, done)
    })
    it('should make a request to gigya.logout')
    it('should logout the user')
    it('should remove the session')
  })
  describe('register', () => {
    it('should respond with 200 ok', (done) => {
      request(app)
        .get('/register')
        .expect(200, done)
    })
    it('should make a request to gigya.initRegistration')
    it('should make a request to gigya.register')
  })
  describe('updateProfile', () => {
    // profile updating
  })
})
