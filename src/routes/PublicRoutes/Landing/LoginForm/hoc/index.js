import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import LoginMutation from './login.graphql'

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export default compose(Form.create(), withLogin)
