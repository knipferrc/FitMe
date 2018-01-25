import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const ClientDashboard = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>Client Dashboard</h1>
  </DefaultLayout>
)

ClientDashboard.propTypes = {}

export default ClientDashboard
