import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerChat = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Live Chat</h1>
  </DefaultLayout>
)

TrainerChat.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerChat
