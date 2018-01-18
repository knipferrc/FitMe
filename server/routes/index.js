const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const schema = require('../api')
const router = express.Router()

const PORT = 1234

router.use(
  '/graphql',
  graphqlExpress(req => ({
    schema,
    context: {
      db: 'db-test'
    }
  }))
)

router.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: 'graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
)

module.exports = router
