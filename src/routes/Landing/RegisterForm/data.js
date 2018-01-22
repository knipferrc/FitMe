import compose from 'recompose/compose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

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
    )
  }
`

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (email, password, firstName, lastName) =>
      mutate({ variables: { email, password, firstName, lastName } })
  })
})

export default compose(withRegister)
