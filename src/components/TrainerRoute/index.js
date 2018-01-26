import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import PageLoader from '../PageLoader'
import PropTypes from 'prop-types'
import UserType from '../../utils/constants/UserType'
import withUser from '../../hoc/withUser'

const { ADMIN, TRAINER, CLIENT } = UserType

class TrainerRoute extends PureComponent {
  componentDidMount() {
    if (this.props.currentUser) {
      const { role, email, firstName, lastName } = this.props.currentUser
      this.props.setCurrentUser(role, email, firstName, lastName)
    }
  }

  getPathName = role => {
    if (role === ADMIN) {
      return '/admin-dashboard'
    } else if (role === CLIENT) {
      return '/client-dashboard'
    } else {
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
            <Component {...props} />
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

TrainerRoute.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  component: PropTypes.node
}

export default withUser(TrainerRoute)
