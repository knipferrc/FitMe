import { compose, graphql } from 'react-apollo'

import RemoveTrainerMutation from './removeTrainer.graphql'

const withRemoveTrainer = graphql(RemoveTrainerMutation, {
  props: ({ mutate }) => ({
    removeTrainer: userId =>
      mutate({
        variables: { userId }
      })
  })
})

export default compose(withRemoveTrainer)
