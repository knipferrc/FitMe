const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const helmet = require('helmet')
const Bundler = require('parcel-bundler')
const compression = require('compression')
const hpp = require('hpp')

const schema = require('./api')

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
    endpointURL: 'graphql'
  })
)

app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))
