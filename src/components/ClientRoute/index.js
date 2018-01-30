import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import UserType from 'utils/constants/UserType'
import withUser from 'hoc/withUser'

const { ADMIN, TRAINER } = UserType

class ClientRoute extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      _id: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    component: PropTypes.func
  }

  getPathName = role => {
    switch (role) {
      case TRAINER:
        return '/trainer/dashboard'
      case ADMIN:
        return '/admin/dashboard'
      default:
        return '/'
    }
  }

  render() {
    const { component: Component, currentUser, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          currentUser && currentUser.role === 'CLIENT' ? (
            <Component currentUser={currentUser} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: !currentUser
                  ? '/'
                  : this.getPathName(currentUser.role),
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
}

export default withUser(ClientRoute)
