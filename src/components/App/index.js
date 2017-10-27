import React from 'react'
import { injectGlobal } from 'styled-components'
import { renderRoutes } from 'react-router-config'

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
  return <div>{renderRoutes(route.routes)}</div>
}

export default App
