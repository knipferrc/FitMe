import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from '../PageLoader'
import PropTypes from 'prop-types'
import UserType from '../../utils/constants/UserType'
import withUser from '../../hoc/withUser'

const { ADMIN, TRAINER, CLIENT } = UserType

class PublicRoute extends PureComponent {
  componentDidMount() {
    if (this.props.currentUser) {
      const { role, email, firstName, lastName } = this.props.currentUser
      this.props.setCurrentUser(role, email, firstName, lastName)
    }
  }

  getPathName = role => {
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

PublicRoute.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  component: PropTypes.func
}

export default withUser(PublicRoute)
