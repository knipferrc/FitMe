import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import LocaleProvider from 'antd/lib/locale-provider'
import React from 'react'
import Routes from '../../routes'
import UserData from '../UserData'
import client from '../../utils/apollo'
import enUS from 'antd/lib/locale-provider/en_US'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`

const App = () => (
  <ApolloProvider client={client}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <UserData>
          {({ currentUser }) => <Routes currentUser={currentUser} />}
        </UserData>
      </BrowserRouter>
    </LocaleProvider>
  </ApolloProvider>
)

export default App
