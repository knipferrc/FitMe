import withState from 'recompose/withState'

const withOpenState = withState('open', 'toggleOpen', false)

export default withOpenState
