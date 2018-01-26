import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import LocaleProvider from 'antd/lib/locale-provider'
import { Provider } from 'unistore/react'
import React from 'react'
import Routes from '../../routes'
import client from '../../utils/apollo'
import enUS from 'antd/lib/locale-provider/en_US'
import { injectGlobal } from 'styled-components'
import store from '../../store'

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

window.addEventListener('beforeunload', ev => {
  ev.preventDefault()
  return (ev.returnValue = 'Ar eyou sure you want to close?')
})

const App = () => (
  <ApolloProvider client={client}>
    <LocaleProvider locale={enUS}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </LocaleProvider>
  </ApolloProvider>
)

export default App
