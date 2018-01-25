import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from '../PageLoader'
import UserType from '../../utils/constants/UserType'
import withData from './withData'

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

const renderRoute = (Component, currentUser, setCurrentUser, rest) => {
  setCurrentUser(
    currentUser.role,
    currentUser.email,
    currentUser.firstName,
    currentUser.lastName
  )
  return (
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
  )
}

const TrainerRoute = ({
  component: Component,
  loading,
  currentUser,
  setCurrentUser,
  ...rest
}) => (
  <Fragment>
    {loading ? (
      <PageLoader />
    ) : (
      <Fragment>
        {renderRoute(Component, currentUser, setCurrentUser, rest)}
      </Fragment>
    )}
  </Fragment>
)

export default withData(TrainerRoute)
