import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica;
  }
`

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App