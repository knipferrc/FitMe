import compose from 'recompose/compose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const CurrentUserQuery = gql`
  query currentUser($accesstoken: String!) {
    currentUser(accesstoken: $accesstoken) {
      email
      firstName
      lastName
    }
  }
`

const withCurrentUser = graphql(CurrentUserQuery, {
  options: props => ({
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

export default compose(withCurrentUser)
