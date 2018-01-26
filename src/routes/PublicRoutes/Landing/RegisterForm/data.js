import Form from 'antd/lib/form'
import actions from '../../../../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

const withActions = connect({}, actions)

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

export default compose(Form.create(), withActions, withRouter, withRegister)
