import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersTotalClientsQuery = gql`
  query TrainersTotalClients($trainerId: ID!) {
    trainersTotalClients(trainerId: $trainerId)
  }
`

const withTrainersTotalClients = graphql(TrainersTotalClientsQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersTotalClients } }) => ({
    loading,
    error,
    trainersTotalClients
  })
})

export default withTrainersTotalClients
