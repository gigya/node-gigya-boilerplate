import http from 'http'

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(3000, '127.0.0.1')

process.title = app

console.log('Server running at http://127.0.0.1:3000/')

module.exports = app
