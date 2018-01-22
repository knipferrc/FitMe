import DashboardRoute from './Dashboard'
import LandingRoute from './Landing'
import ProtectedRoute from 'components/ProtectedRoute'
import PublicRoute from 'components/PublicRoute'
import React from 'react'
import { Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <PublicRoute path="/" exact component={LandingRoute} />
    <ProtectedRoute path="/dashboard" exact component={DashboardRoute} />
  </Switch>
)
