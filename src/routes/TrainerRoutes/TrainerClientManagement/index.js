import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerClientManagement = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Client Management</h1>
  </DefaultLayout>
)

TrainerClientManagement.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerClientManagement
