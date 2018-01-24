import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const TrainerRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser && currentUser.role === 'TRAINER' ? (
        <Component user={currentUser} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: !currentUser
              ? '/'
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

export default TrainerRoute
