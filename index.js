const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
app.use(express.json({ extended: true }))

app.use('/api/users', require('./routes/authRoutes'))
app.use('/api/links', require('./routes/linkRoutes'))
app.use('/t', require('./routes/redirectRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log(`server started on ${PORT} port`)
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()