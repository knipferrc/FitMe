import { Card } from 'antd'

import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const ChangePassword = ({ history, location }) => (
  <DefaultLayout history={history} location={location}>
    <Card title="Change Password">Change Password</Card>
  </DefaultLayout>
)

ChangePassword.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
}

export default ChangePassword
