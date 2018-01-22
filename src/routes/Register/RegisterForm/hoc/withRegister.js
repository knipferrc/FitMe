import RegisterMutation from './mutations/register'
import { graphql } from 'react-apollo'

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (email, password, firstName, lastName) =>
      mutate({ variables: { email, password, firstName, lastName } })
  })
})

export default withRegister
