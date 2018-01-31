import AllTrainers from './AllTrainers'
import { Col } from 'antd'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
`

const Dashboard = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <Container>
      <Col span={24}>
        <h1>Admin Dashboard</h1>
        <AllTrainers />
      </Col>
    </Container>
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
