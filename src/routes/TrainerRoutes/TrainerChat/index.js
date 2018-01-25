import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerChat = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>Live Chat</h1>
  </DefaultLayout>
)

TrainerChat.propTypes = {}

export default TrainerChat
