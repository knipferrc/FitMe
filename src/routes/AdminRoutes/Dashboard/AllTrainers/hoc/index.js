import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const AllTrainersQuery = gql`
  query AllTrainers {
    allTrainers {
      _id
      role
      email
      password
      firstName
      lastName
      whosClient
    }
  }
`

const NewOrUpdatedTrainerSubscription = gql`
  subscription NewOrUpdatedTrainer {
    newOrUpdatedTrainer {
      _id
      role
      email
      password
      firstName
      lastName
      whosClient
    }
  }
`

const withAllTrainers = graphql(AllTrainersQuery, {
  props: ({ data: { loading, error, allTrainers, subscribeToMore } }) => ({
    loading,
    error,
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
