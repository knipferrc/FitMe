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

const PublicRoute = ({
  component: Component,
  loading,
  currentUser,
  ...rest
}) => (
  <Fragment>
    {loading ? (
      <PageLoader />
    ) : (
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
  </Fragment>
)

export default withData(PublicRoute)
