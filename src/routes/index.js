import React from 'react'

import { Route, Switch } from 'react-router-dom'
import LandingRoute from './Landing'

export default () => (
  <Switch>
    <Route path="/" component={LandingRoute} />
  </Switch>
)
