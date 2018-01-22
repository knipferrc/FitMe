import './App.css'

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Routes from 'routes'
import client from 'lib/apollo'

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
)

export default App
