import React from 'react'

import { Route, Switch } from 'react-router-dom'
import LandingRoute from './Landing'
import RegisterRoute from './Register'

export default () => (
  <Switch>
    <Route exact path="/" component={LandingRoute} />
    <Route exact path="/register" component={RegisterRoute} />
  </Switch>
)
