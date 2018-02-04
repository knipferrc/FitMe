import { compose, graphql } from 'react-apollo'

import { Form } from 'antd'
import CreateClientMutation from './createClient.graphql'

const withCreateClient = graphql(CreateClientMutation, {
  props: ({ mutate }) => ({
    createClient: (email, password, firstName, lastName, trainerId) =>
      mutate({
        variables: { email, password, firstName, lastName, trainerId }
      })
  })
})

export default compose(Form.create(), withCreateClient)
