import actions from '../../../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'

const mapToProps = ({ currentUser }) => ({ currentUser })

export default compose(connect(mapToProps, actions))
