import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const PublicRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !currentUser ? (
        <Component user={currentUser} {...props} />
      ) : (
        <Redirect
          to={{
            pathname:
              currentUser.role === 'TRAINER'
                ? '/trainer-dashboard'
                : currentUser.role === 'ADMIN'
                  ? '/admin-dashboard'
                  : currentUser.role === 'CLIENT' ? '/client-dashboard' : '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PublicRoute
