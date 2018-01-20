import './App.css'

import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from '../../lib/apollo'
import Routes from '../../routes'

const App = () => (
  <ApolloProvider {...{ client }}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
)

export default App
