import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import gql from 'graphql-tag'

const CreateClientMutation = gql`
  mutation createClient(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $whosClient: ID!
  ) {
    createClient(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      whosClient: $whosClient
    ) {
      firstName
      lastName
    }
  }
`

const withCreateClient = graphql(CreateClientMutation, {
  props: ({ mutate }) => ({
    createClient: (email, password, firstName, lastName, whosClient) =>
      mutate({
        variables: { email, password, firstName, lastName, whosClient }
      })
  })
})

export default compose(Form.create(), withCreateClient)
