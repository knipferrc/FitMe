import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersTotalWorkoutsQuery = gql`
  query TrainersTotalWorkouts($trainerId: ID!) {
    trainersTotalWorkouts(trainerId: $trainerId)
  }
`

const withTrainersWorkoutCount = graphql(TrainersTotalWorkoutsQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersTotalWorkouts } }) => ({
    loading,
    error,
    trainersTotalWorkouts
  })
})

export default withTrainersWorkoutCount
