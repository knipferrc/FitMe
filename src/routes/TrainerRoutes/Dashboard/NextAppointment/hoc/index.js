import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersNextAppointmentQuery = gql`
  query TrainersNextAppointment($trainerId: ID!) {
    trainersNextAppointment(trainerId: $trainerId) {
      workoutDate
    }
  }
`

const withTrainersNextAppointment = graphql(TrainersNextAppointmentQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersNextAppointment } }) => ({
    loading,
    error,
    trainersNextAppointment
  })
})

export default withTrainersNextAppointment
