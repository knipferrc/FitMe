import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const SendResetPasswordEmail = gql`
  mutation sendResetPasswordEmail($email: String!) {
    sendResetPasswordEmail(email: $email)
  }
`

const withSendResetPasswordEmail = graphql(SendResetPasswordEmail, {
  props: ({ mutate }) => ({
    sendResetPasswordEmail: email => mutate({ variables: { email } })
  })
})

export default compose(Form.create(), withSendResetPasswordEmail)
