const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const Bundler = require('parcel-bundler')
const schema = require('./api')

let bundler = new Bundler('index.html')
let app = express()

app.use(bodyParser.json())
app.use(helmet())

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    rootValue: {
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
