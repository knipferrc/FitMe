import Form from 'antd/lib/form'
import actions from '../../../../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

const withActions = connect({}, actions)

const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      role
      email
      firstName
      lastName
    }
  }
`

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export default compose(Form.create(), withActions, withRouter, withLogin)
