import LoginMutation from './mutations/login'
import { graphql } from 'react-apollo'

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export default withLogin
