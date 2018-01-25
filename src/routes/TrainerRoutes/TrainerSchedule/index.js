import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerSchedule = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>My Schedule</h1>
  </DefaultLayout>
)

TrainerSchedule.propTypes = {}

export default TrainerSchedule
