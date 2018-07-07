import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, main, #root {
    height: 100%;
    width: 100%;
  }
`

const App = () => (
  <Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Fragment>
)

export default App
