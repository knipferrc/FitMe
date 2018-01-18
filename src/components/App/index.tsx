import * as React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'
import 'fit.css/dist/fit.min.css'

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default App
