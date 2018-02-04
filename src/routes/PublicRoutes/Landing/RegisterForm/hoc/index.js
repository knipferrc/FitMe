import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import RegisterMutation from './register.graphql'

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (email, password, firstName, lastName) =>
      mutate({ variables: { email, password, firstName, lastName } })
  })
})

export default compose(Form.create(), withRegister)
