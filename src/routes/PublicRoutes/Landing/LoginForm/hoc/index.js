import Form from 'antd/lib/form'
import actions from '../../../../../store/actions'
import compose from 'recompose/compose'
import { connect } from 'unistore/react'
import { withRouter } from 'react-router-dom'

const withActions = connect({}, actions)

export default compose(Form.create(), withActions, withRouter)
