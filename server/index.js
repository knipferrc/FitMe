const express = require('express')
const helmet = require('helmet')
const Bundler = require('parcel-bundler')
const hpp = require('hpp')
const compression = require('compression')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const { SubscriptionServer } = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')
const { createServer } = require('http')

const routes = require('./routes')
const schema = require('./api')

const bundler = new Bundler('index.html')
const app = express()

const PORT = 1234

app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
app.use(hpp())
app.use(routes)
app.use(bundler.middleware())

MongoClient.connect(process.env.DB_CONNECTION_STRING)
  .catch(err => console.error(err.stack))
  .then(db => {
    app.locals.db = db
    console.log('Database connection successful.')
  })
  .then(() => {
    const ws = createServer(app)

    ws.listen(PORT, err => {
      if (err) throw err

      console.log(`Server is now running on http://localhost:${PORT}`)

      new SubscriptionServer(
        {
          execute,
          subscribe,
          schema,
          onConnect: () => console.log('Client connected')
        },
        {
          server: ws,
          path: '/subscriptions'
        }
      )
    })
  })
