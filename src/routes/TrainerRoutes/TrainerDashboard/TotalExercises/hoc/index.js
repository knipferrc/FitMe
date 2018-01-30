import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersTotalExercisesQuery = gql`
  query TrainersTotalExercises($trainerId: ID!) {
    trainersTotalExercises(trainerId: $trainerId)
  }
`

const withTrainersExerciseCount = graphql(TrainersTotalExercisesQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersTotalExercises } }) => ({
    loading,
    error,
    trainersTotalExercises
  })
})

export default withTrainersExerciseCount
