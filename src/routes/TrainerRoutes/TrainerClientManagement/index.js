import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerClientManagement = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>Client Management</h1>
  </DefaultLayout>
)

TrainerClientManagement.propTypes = {}

export default TrainerClientManagement
