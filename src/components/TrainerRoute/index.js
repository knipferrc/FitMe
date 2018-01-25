import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import UserData from '../UserData'
import UserType from '../../utils/constants/UserType'

const { ADMIN, TRAINER, CLIENT } = UserType

const getPathName = role => {
  if (role === ADMIN) {
    return '/admin-dashboard'
  } else if (role === CLIENT) {
    return '/client-dashboard'
  } else {
    return '/'
  }
}

const TrainerRoute = ({ component: Component, currentUser, ...rest }) => (
  <UserData>
    {({ currentUser }) => (
      <Route
        {...rest}
        render={props =>
          currentUser && currentUser.role === TRAINER ? (
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

export default TrainerRoute
