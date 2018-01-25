import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from '../PageLoader'
import UserType from '../../utils/constants/UserType'
import withData from './withData'

const { TRAINER, ADMIN, CLIENT } = UserType

const getPathName = role => {
  switch (role) {
    case TRAINER:
      return '/trainer-dashboard'
      break
    case ADMIN:
      return '/admin-dashboard'
      break
    case CLIENT:
      return '/client-dashboard'
      break
    default:
      return '/'
  }
}

const renderRoute = (Component, currentUser, setCurrentUser, rest) => {
  currentUser &&
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
        !currentUser ? (
          <Component {...props} />
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
  )
}

const PublicRoute = ({
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

export default withData(PublicRoute)
