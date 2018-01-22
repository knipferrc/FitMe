import DashboardRoute from './Dashboard'
import LandingRoute from './Landing'
import React from 'react'
import { Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <LandingRoute path="/" exact />
    <DashboardRoute path="/dashboard" exact />
  </Switch>
)
