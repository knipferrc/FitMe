import { Row, Col, Card } from 'antd'

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
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Col span={24}>
          <EditProfileCard>
            <EditProfileForm currentUser={currentUser} />
          </EditProfileCard>
        </Col>
      </Col>
    </Row>
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
