import React, { PureComponent } from 'react'

import PageLoader from '../components/PageLoader'
import PropTypes from 'prop-types'
import actions from '../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export default ComposedComponent => {
  class FetchCurrentUser extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool
    }

    render() {
      const { loading } = this.props

      if (loading) {
        return <PageLoader />
      }
      return <ComposedComponent {...this.props} />
    }
  }

  const mapToProps = ({ authed, accesstoken }) => ({ authed, accesstoken })

  const CurrentUserQuery = gql`
    query currentUser($accesstoken: String!) {
      currentUser(accesstoken: $accesstoken) {
        email
        firstName
        lastName
        role
      }
    }
  `

  const withCurrentUser = graphql(CurrentUserQuery, {
    skip: props => !props.authed,
    options: props => ({
      variables: {
        accesstoken: props.accesstoken
      }
    }),
    props: ({ data: { loading, error, currentUser } }) => ({
      loading,
      error,
      currentUser
    })
  })

  return compose(connect(mapToProps, actions), withCurrentUser)(
    FetchCurrentUser
  )
}
