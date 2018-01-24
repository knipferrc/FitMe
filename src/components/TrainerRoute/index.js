import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from 'components/PageLoader'
import withData from './withData'

const TrainerRoute = ({
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
    )}
  </Fragment>
)

export default withData(TrainerRoute)
