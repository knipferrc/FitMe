import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerWorkoutBuilder = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>Workout Builder</h1>
  </DefaultLayout>
)

TrainerWorkoutBuilder.propTypes = {}

export default TrainerWorkoutBuilder
