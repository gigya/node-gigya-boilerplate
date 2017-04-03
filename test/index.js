import http from 'http'
import assert from 'assert'

const url = `${process.env.TEST_URL}:${process.env.PORT || process.env.DEFAULT_PORT}`

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
