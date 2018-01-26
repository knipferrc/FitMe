import actions from '../../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'
import { withRouter } from 'react-router-dom'

const mapToProps = ({ currentUser }) => ({ currentUser })

export default compose(connect(mapToProps, actions), withRouter)
