import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const TrainersWorkoutCountQuery = gql`
  query trainersWorkoutCount($trainerId: ID!) {
    trainersWorkoutCount(trainerId: $trainerId)
  }
`

const withTrainersWorkoutCount = graphql(TrainersWorkoutCountQuery, {
  options: props => ({
    variables: {
      trainerId: props.trainerId
    }
  }),
  props: ({ data: { loading, error, trainersWorkoutCount } }) => ({
    loading,
    error,
    trainersWorkoutCount
  })
})

export default withTrainersWorkoutCount
