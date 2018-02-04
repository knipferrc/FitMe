import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import SendResetPasswordEmailMutation from './sendResetPasswordEmail.graphql'

const withSendResetPasswordEmail = graphql(SendResetPasswordEmailMutation, {
  props: ({ mutate }) => ({
    sendResetPasswordEmail: email => mutate({ variables: { email } })
  })
})

export default compose(Form.create(), withSendResetPasswordEmail)
