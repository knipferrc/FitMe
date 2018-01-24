import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from 'components/PageLoader'
import withData from './withData'

const ClientRoute = ({
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
  </Fragment>
)

export default withData(ClientRoute)
