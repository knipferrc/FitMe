import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import ResetPasswordMutation from './resetPassword.graphql'

const withResetPassword = graphql(ResetPasswordMutation, {
  props: ({ mutate }) => ({
    resetPassword: (password, token) =>
      mutate({ variables: { password, token } })
  })
})

export default compose(Form.create(), withResetPassword)
