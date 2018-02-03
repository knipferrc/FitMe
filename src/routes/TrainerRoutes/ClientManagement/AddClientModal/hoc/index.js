import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const CreateClientMutation = gql`
  mutation createClient(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $trainerId: ID!
  ) {
    createClient(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      trainerId: $trainerId
    ) {
      firstName
      lastName
    }
  }
`

const withCreateClient = graphql(CreateClientMutation, {
  props: ({ mutate }) => ({
    createClient: (email, password, firstName, lastName, trainerId) =>
      mutate({
        variables: { email, password, firstName, lastName, trainerId }
      })
  })
})

export default compose(Form.create(), withCreateClient)
