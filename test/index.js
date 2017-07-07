import http from 'http'
import assert from 'assert'

const url = `${process.env.TEST_URL}:${process.env.PORT || process.env.DEFAULT_PORT}`

describe('Boot Basic Server', () => {
  it('should return 200 when hitting the index', done => {
    http.get(url, res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
})
