import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getOperationAST } from 'graphql'

const httpUri =
  process.env.NODE_ENV === 'production'
    ? 'TODO - production url'
    : 'http://localhost:5000/graphql'

const wsUri = 'ws://localhost:5000/subscriptions'

const link = ApolloLink.split(
  operation => {
    const operationAST = getOperationAST(
      operation.query,
      operation.operationName
    )

    return !!operationAST && operationAST.operation === 'subscription'
  },
  new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true
    }
  }),
  new HttpLink({ uri: httpUri })
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default client
