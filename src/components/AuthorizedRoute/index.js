import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const AuthorizedRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} user={rest.user} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )}
    />
  )
}

export default AuthorizedRoute
