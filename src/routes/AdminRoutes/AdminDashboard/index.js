import DefaultLayout from '../../../layouts/DefaultLayout'
import React from 'react'

const AdminDashboard = ({ user }) => (
  <DefaultLayout user={user}>
    <h1>Admin Dashboard</h1>
  </DefaultLayout>
)

export default AdminDashboard
