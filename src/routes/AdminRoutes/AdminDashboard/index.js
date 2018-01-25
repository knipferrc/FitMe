import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const AdminDashboard = ({ currentUser }) => (
  <DefaultLayout currentUser={currentUser}>
    <h1>Admin Dashboard</h1>
  </DefaultLayout>
)

AdminDashboard.propTypes = {}

export default AdminDashboard
