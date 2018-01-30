import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import UserType from 'utils/constants/UserType'
import withUser from 'hoc/withUser'

const { ADMIN, TRAINER, CLIENT } = UserType

class TrainerRoute extends PureComponent {
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
      case ADMIN:
        return '/admin/dashboard'
      case CLIENT:
        return '/client/dashboard'
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
          currentUser && currentUser.role === TRAINER ? (
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

export default withUser(TrainerRoute)
