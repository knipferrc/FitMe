import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersExerciseCountQuery = gql`
  query trainersExerciseCount($trainerId: ID!) {
    trainersExerciseCount(trainerId: $trainerId)
  }
`

const withTrainersExerciseCount = graphql(TrainersExerciseCountQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersExerciseCount } }) => ({
    loading,
    error,
    trainersExerciseCount
  })
})

export default withTrainersExerciseCount
