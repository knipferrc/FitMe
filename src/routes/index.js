import { Route, Switch } from 'react-router-dom'

import AuthorizedRoute from 'components/AuthorizedRoute'
import DashboardRoute from './Dashboard'
import HomeRoute from './Home'
import LoginRoute from './Login'
import NotFoundRoute from './NotFound'
import PublicRoute from 'components/PublicRoute'
import React from 'react'
import RegisterRoute from './Register'

const Routes = ({ authed, user }) => {
  return (
    <Switch>
      <PublicRoute exact authed={authed} path="/" component={HomeRoute} />
      <PublicRoute exact authed={authed} path="/login" component={LoginRoute} />
      <PublicRoute
        exact
        authed={authed}
        path="/register"
        component={RegisterRoute}
      />
      <AuthorizedRoute
        exact
        authed={authed}
        path="/dashboard"
        component={DashboardRoute}
        user={user}
      />
      <Route path="*" component={NotFoundRoute} />
    </Switch>
  )
}

export default Routes
