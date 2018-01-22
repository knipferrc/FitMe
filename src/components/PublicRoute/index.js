import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const loggedIn = false

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn === false ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PublicRoute
