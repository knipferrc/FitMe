import compose from 'recompose/compose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export default compose(withLogin)
