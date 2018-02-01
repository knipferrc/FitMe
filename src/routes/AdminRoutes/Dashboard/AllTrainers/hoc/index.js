import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const AllTrainersQuery = gql`
  query AllTrainers {
    allTrainers {
      _id
      role
      email
      firstName
      lastName
    }
  }
`

const NewOrUpdatedTrainerSubscription = gql`
  subscription NewOrUpdatedTrainer {
    newOrUpdatedTrainer {
      _id
      role
      email
      firstName
      lastName
    }
  }
`

const withAllTrainers = graphql(AllTrainersQuery, {
  props: ({ data: { error, loading, allTrainers, subscribeToMore } }) => ({
    error,
    loading,
    allTrainers,
    subscribeToNewOrUpdatedTrainer: params => {
      subscribeToMore({
        document: NewOrUpdatedTrainerSubscription,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev
          }

          const newOrUpdatedTrainer = subscriptionData.data.newOrUpdatedTrainer

          return {
            ...prev,
            allTrainers: [
              newOrUpdatedTrainer,
              ...prev.allTrainers.filter(
                trainer => trainer._id !== newOrUpdatedTrainer._id
              )
            ]
          }
        }
      })
    }
  })
})

export default withAllTrainers
