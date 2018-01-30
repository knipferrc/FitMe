import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const Dashboard = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <h1>Admin Dashboard</h1>
  </DefaultLayout>
)

Dashboard.propTypes = {
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

export default Dashboard
