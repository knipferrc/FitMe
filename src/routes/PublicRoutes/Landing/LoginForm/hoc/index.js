import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      role
    }
  }
`

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export default compose(Form.create(), withLogin)
