const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')
const helmet = require('helmet')
const Bundler = require('parcel-bundler')
const compression = require('compression')
const hpp = require('hpp')
const { createServer } = require('http')

const schema = require('./api')

const PORT = 1234

const bundler = new Bundler('index.html')
const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(helmet())
app.use(compression())
app.use(hpp())

app.use(
  '/graphql',
  graphqlExpress(req => ({
    schema,
    context: {
      db: 'db-test'
    }
  }))
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: 'graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
)

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
