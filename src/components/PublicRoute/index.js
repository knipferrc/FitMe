import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem('accesstoken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/trainer-dashboard',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PublicRoute
