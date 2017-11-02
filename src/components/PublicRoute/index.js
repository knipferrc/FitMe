import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/dashboard' }} />
        )}
    />
  )
}

export default PublicRoute
