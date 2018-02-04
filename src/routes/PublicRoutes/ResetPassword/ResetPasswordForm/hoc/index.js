import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const ResetPassword = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token) {
      accessToken
      role
    }
  }
`

const withResetPassword = graphql(ResetPassword, {
  props: ({ mutate }) => ({
    resetPassword: (password, token) =>
      mutate({ variables: { password, token } })
  })
})

export default compose(Form.create(), withResetPassword)
