import './App.css'

import React from 'react'

import { ApolloProvider } from 'react-apollo'
import client from '../../lib/apollo'
import Test from '../test'

const App = () => (
  <ApolloProvider {...{ client }}>
    <Test />
  </ApolloProvider>
)

export default App
