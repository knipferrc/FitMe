import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersClientsQuery = gql`
  query getsTrainersClients($trainerId: ID!) {
    getTrainersClients(trainerId: $trainerId) {
      email
      firstName
      lastName
    }
  }
`

const withTrainersClients = graphql(TrainersClientsQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, getTrainersClients } }) => ({
    loading,
    error,
    getTrainersClients
  })
})

export default withTrainersClients
