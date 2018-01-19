import './App.css'
import 'fit.css/dist/fit.min.css'

import * as React from 'react'

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import client from '../../lib/apollo'

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
)

export default App
