import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Form } from 'antd'
import UpdateTrainerProfileMutation from './updateTrainerProfile.graphql'

const withUpdateTrainerProfile = graphql(UpdateTrainerProfileMutation, {
  props: ({ mutate }) => ({
    updateTrainerProfile: (firstName, lastName) =>
      mutate({ variables: { firstName, lastName } })
  }),
  options: {
    refetchQueries: [
      {
        query: gql`
          query CurrentUser($accessToken: String!) {
            currentUser(accessToken: $accessToken) {
              _id
              email
              firstName
              lastName
              role
            }
          }
        `,
        variables: { accessToken: localStorage.getItem('accessToken') }
      }
    ]
  }
})

export default compose(Form.create(), withUpdateTrainerProfile)
