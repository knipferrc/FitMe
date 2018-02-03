import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersClientsQuery = gql`
  query TrainersClients($trainerId: ID!) {
    trainersClients(trainerId: $trainerId) {
      email
      firstName
      lastName
    }
  }
`

const withTrainersClients = graphql(TrainersClientsQuery, {
  options: props => ({
    variables: {
      trainerId: props.currentUser._id
    }
  }),
  props: ({ data: { loading, error, trainersClients } }) => ({
    loading,
    error,
    trainersClients
  })
})

export default withTrainersClients
