import { graphql } from 'react-apollo'
import TrainersClientsQuery from './trainersClients.graphql'

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
