import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersNextAppointment = gql`
  query getNextAppointment($trainerId: ID!) {
    getNextAppointment(trainerId: $trainerId) {
      workoutDate
    }
  }
`

const withTrainersNextAppointment = graphql(TrainersNextAppointment, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, getNextAppointment } }) => ({
    loading,
    error,
    getNextAppointment
  })
})

export default withTrainersNextAppointment
