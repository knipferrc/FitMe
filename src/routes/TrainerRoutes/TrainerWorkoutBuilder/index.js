import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerWorkoutBuilder = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Workout Builder</h1>
  </DefaultLayout>
)

TrainerWorkoutBuilder.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerWorkoutBuilder
