import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import { injectGlobal } from 'styled-components'
import 'tailwindcss/dist/tailwind.min.css'

injectGlobal`
  html, body, main, #root {
    height: 100%;
    width: 100%;
  }
`

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App
