import { Card } from 'antd'

import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import EditProfileForm from './EditProfileForm'
import EditProfileCard from './EditProfileCard'

const Profile = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <EditProfileCard
      firstName={currentUser.firstName}
      lastName={currentUser.lastName}
    >
      <EditProfileForm currentUser={currentUser} />
    </EditProfileCard>
  </DefaultLayout>
)

Profile.propTypes = {
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

export default Profile
