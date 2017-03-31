import http from 'http'
import assert from 'assert'

const url = 'http://127.0.0.1:3000'

describe('Gigya Node Server', () => {
  it('should return 200 when hitting the index', done => {
    http.get(url, res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
  it('should redirect to the index if there is no user logged in')
  it('should redirect to the profile page after login')
})
