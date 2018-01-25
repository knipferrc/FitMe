import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import UserData from '../UserData'
import UserType from '../../utils/constants/UserType'

const { TRAINER, ADMIN, CLIENT } = UserType

const getPathName = role => {
  switch (role) {
    case TRAINER:
      return '/trainer-dashboard'
    case ADMIN:
      return '/admin-dashboard'
    case CLIENT:
      return '/client-dashboard'
    default:
      return '/'
  }
}

const PublicRoute = ({ component: Component, currentUser, ...rest }) => (
  <UserData>
    {({ currentUser }) => (
      <Route
        {...rest}
        render={props =>
          !currentUser ? (
            <Component user={currentUser} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: getPathName(currentUser.role),
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </UserData>
)

export default PublicRoute
