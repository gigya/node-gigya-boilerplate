import express from 'express'
import path from 'path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.set('port', (process.env.PORT || process.env.DEFAULT_PORT))

app.listen(app.get('port'), () => {
  console.log(`Node app is running on http://127.0.0.1:${app.get('port')}`)
})
