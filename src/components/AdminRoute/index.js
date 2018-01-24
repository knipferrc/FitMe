import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import UserData from 'components/UserData'

const AdminRoute = ({ component: Component, currentUser, ...rest }) => (
  <UserData>
    {({ currentUser }) => (
      <Route
        {...rest}
        render={props =>
          currentUser && currentUser.role === 'ADMIN' ? (
            <Component user={currentUser} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: !currentUser
                  ? '/'
                  : currentUser.role === 'TRAINER'
                    ? '/trainer-dashboard'
                    : currentUser.role === 'CLIENT' ? '/client-dashboard' : '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </UserData>
)

export default AdminRoute
