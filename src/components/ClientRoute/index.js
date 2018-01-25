import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from '../PageLoader'
import UserType from '../../utils/constants/UserType'
import withData from './withData'

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
        currentUser && currentUser.role === 'CLIENT' ? (
          <Component {...props} />
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

const ClientRoute = ({
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

export default withData(ClientRoute)
