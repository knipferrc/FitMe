const express = require('express')
const next = require('next')
const helmet = require('helmet')
const hpp = require('hpp')
const compression = require('compression')
const MongoClient = require('mongodb').MongoClient
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { createServer } = require('http')
const { execute, subscribe } = require('graphql')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const schema = require('./api')

require('dotenv').config()

app.prepare().then(() => {
  const server = express()
  server.disable('x-powered-by')
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(helmet())
  server.use(compression())
  server.use(hpp())
  server.use(
    '/graphql',
    graphqlExpress(req => ({
      schema,
      context: {
        db: 'db-test'
      }
    }))
  )
  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: 'graphql',
      subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
    })
  )
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  MongoClient.connect(process.env.DB_CONNECTION_STRING)
    .catch(err => console.error(err.stack))
    .then(() => {
      console.log('Database connection successful.')
    })
    .then(() => {
      const ws = createServer(server)

      ws.listen(port, err => {
        if (err) throw err

        console.log(`Server is now running on http://localhost:${port}`)

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
})
