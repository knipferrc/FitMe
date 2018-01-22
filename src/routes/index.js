import { Route, Switch } from 'react-router-dom'

import LandingRoute from './Landing'
import React from 'react'

export default () => (
  <Switch>
    <Route exact path="/" component={LandingRoute} />
  </Switch>
)
