import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerSchedule = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>My Schedule</h1>
  </DefaultLayout>
)

TrainerSchedule.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerSchedule
