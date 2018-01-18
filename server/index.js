const express = require('express')
const helmet = require('helmet')
const Bundler = require('parcel-bundler')
const hpp = require('hpp')
const compression = require('compression')

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
