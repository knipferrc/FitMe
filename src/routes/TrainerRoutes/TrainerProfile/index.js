import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerProfile = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>My Profile</h1>
  </DefaultLayout>
)

TrainerProfile.propTypes = {}

export default TrainerProfile
