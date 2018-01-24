import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import UserData from 'components/UserData'

const ClientRoute = ({ component: Component, currentUser, ...rest }) => (
  <UserData>
    {({ currentUser }) => (
      <Route
        {...rest}
        render={props =>
          currentUser && currentUser.role === 'CLIENT' ? (
            <Component user={currentUser} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: !currentUser
                  ? '/'
                  : currentUser.role === 'TRAINER'
                    ? '/trainer-dashboard'
                    : currentUser.role === 'ADMIN' ? '/admin-dashboard' : '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </UserData>
)

export default ClientRoute
