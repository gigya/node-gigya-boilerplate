import express from 'express'

const app = express()

// app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.set('port', (process.env.PORT || process.env.DEFAULT_PORT))

app.listen(app.get('port'), () => {
  console.log(`Node app is running on http://127.0.0.1:${app.get('port')}`)
})
