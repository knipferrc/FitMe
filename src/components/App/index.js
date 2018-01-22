import './App.css'

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import LocaleProvider from 'antd/lib/locale-provider'
import React from 'react'
import Routes from 'routes'
import client from 'lib/apollo'
import enUS from 'antd/lib/locale-provider/en_US'

const App = () => (
  <ApolloProvider client={client}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LocaleProvider>
  </ApolloProvider>
)

export default App
