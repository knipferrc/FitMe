import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import UserData from '../UserData'
import UserType from '../../utils/constants/UserType'

const { ADMIN, TRAINER } = UserType

const getPathName = role => {
  if (role === TRAINER) {
    return '/trainer-dashboard'
  } else if (role === ADMIN) {
    return '/admin-dashboard'
  } else {
    return '/'
  }
}

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
                pathname: !currentUser ? '/' : getPathName(currentUser.role),
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
