import React, { PureComponent } from 'react'

import PageLoader from '../components/PageLoader'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export default ComposedComponent => {
  class WithUser extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      error: PropTypes.object,
      currentUser: PropTypes.shape({
        _id: PropTypes.string,
        role: PropTypes.string,
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      })
    }

    render() {
      const { loading } = this.props

      if (loading) {
        return <PageLoader />
      }
      return <ComposedComponent {...this.props} />
    }
  }

  const CurrentUserQuery = gql`
    query currentUser($accesstoken: String!) {
      currentUser(accesstoken: $accesstoken) {
        _id
        email
        firstName
        lastName
        role
      }
    }
  `

  const withCurrentUser = graphql(CurrentUserQuery, {
    skip: () => localStorage.getItem('accesstoken') === null,
    options: () => ({
      variables: {
        accesstoken: localStorage.getItem('accesstoken')
      }
    }),
    props: ({ data: { loading, error, currentUser } }) => ({
      loading,
      error,
      currentUser
    })
  })

  return withCurrentUser(WithUser)
}
