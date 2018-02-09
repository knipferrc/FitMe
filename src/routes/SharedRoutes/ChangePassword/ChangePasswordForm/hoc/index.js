import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import ChangePasswordMutation from './changePassword.graphql'

const withChangePassword = graphql(ChangePasswordMutation, {
  props: ({ mutate }) => ({
    changePassword: password => mutate({ variables: { password } })
  })
})

export default compose(Form.create(), withChangePassword)
