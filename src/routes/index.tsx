import { Route, Switch } from 'react-router-dom'
import * as React from 'react'
import LandingRoute from './Landing'

export default () => (
  <Switch>
    <Route path="/" component={LandingRoute} />
  </Switch>
)
