import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerProfile = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <h1>My Profile</h1>
  </DefaultLayout>
)

TrainerProfile.propTypes = {
  currentUser: PropTypes.shape({
    _id: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  history: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.node
}

export default TrainerProfile
