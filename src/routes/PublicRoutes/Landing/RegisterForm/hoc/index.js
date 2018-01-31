import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const RegisterMutation = gql`
  mutation register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      accessToken
      role
    }
  }
`

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (email, password, firstName, lastName) =>
      mutate({ variables: { email, password, firstName, lastName } })
  })
})

export default compose(Form.create(), withRegister)
