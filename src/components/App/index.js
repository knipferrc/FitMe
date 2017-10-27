import { ApolloProvider } from 'react-apollo'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import client from 'lib/apollo'
import { injectGlobal } from 'styled-components'
import { renderRoutes } from 'react-router-config'
import routes from 'routes'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: #333;
    background: #f5f6fa;
  }
`

const App = ({ route }) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
