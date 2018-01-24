import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const AdminDashboard = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Admin Dashboard</h1>
  </DefaultLayout>
)

AdminDashboard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default AdminDashboard
