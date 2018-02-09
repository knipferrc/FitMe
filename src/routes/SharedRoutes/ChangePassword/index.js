import { Card } from 'antd'

import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

import ChangePasswordForm from './ChangePasswordForm'

const ChangePassword = ({ history, location, currentUser }) => (
  <DefaultLayout
    history={history}
    location={location}
    currentUser={currentUser}
  >
    <Card title="Change Password">
      <ChangePasswordForm history={history} />
    </Card>
  </DefaultLayout>
)

ChangePassword.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
}

export default ChangePassword
