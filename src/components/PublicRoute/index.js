import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import UserType from '../../utils/constants/UserType'
import fetchCurrentUser from '../../utils/fetchCurrentUser'

const { ADMIN, TRAINER, CLIENT } = UserType

class PublicRoute extends PureComponent {
  static propTypes = {
    setCurrentUser: PropTypes.func,
    currentUser: PropTypes.shape({
      id: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    component: PropTypes.func
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const { id, role, email, firstName, lastName } = this.props.currentUser
      this.props.setCurrentUser(id, role, email, firstName, lastName)
    }
  }

  getPathName = role => {
    switch (role) {
      case TRAINER:
        return '/trainer-dashboard'
      case ADMIN:
        return '/admin-dashboard'
      case CLIENT:
        return '/client-dashboard'
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
          !currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: this.getPathName(currentUser.role),
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
}

export default fetchCurrentUser(PublicRoute)
