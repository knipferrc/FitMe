import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerProfile = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>My Profile</h1>
  </DefaultLayout>
)

TrainerProfile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerProfile
