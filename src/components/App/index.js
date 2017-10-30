import { ThemeProvider, injectGlobal } from 'styled-components'

import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from 'routes'
import theme from 'lib/theme'

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </ThemeProvider>
  )
}

export default App
