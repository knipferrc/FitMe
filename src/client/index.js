import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import routes from 'common/routes'

hydrate(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
