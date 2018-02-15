import { graphql } from 'react-apollo'

import AllTrainersQuery from './allTrainers.graphql'
import NewOrUpdatedTrainerSubscription from './newOrUpdatedTrainer.graphql'
import TrainerRemovedSubscription from './trainerRemoved.graphql'

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
    },
    subscribeToTrainerRemoved: params => {
      subscribeToMore({
        document: TrainerRemovedSubscription,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev
          }

          const deletedTrainer = subscriptionData.data.trainerRemoved

          return {
            ...prev,
            allTrainers: [
              ...prev.allTrainers.filter(
                trainer => trainer._id !== deletedTrainer._id
              )
            ]
          }
        }
      })
    }
  })
})

export default withAllTrainers
