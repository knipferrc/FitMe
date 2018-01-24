import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const ClientDashboard = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Client Dashboard</h1>
  </DefaultLayout>
)

ClientDashboard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default ClientDashboard
