import { Col, Row } from 'antd'

import DefaultLayout from 'layouts/DefaultLayout'
import NextAppointment from './NextAppointment'
import PropTypes from 'prop-types'
import React from 'react'
import TotalClients from './TotalClients'
import TotalExercises from './TotalExercises'
import TotalWorkouts from './TotalWorkouts'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
`

const StyledCol = styled(Col)`
  @media (max-width: 740px) {
    margin-bottom: 5px;
  }
`

const Dashboard = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <Container>
      <Row gutter={8} style={{ marginBottom: 10 }}>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TotalClients trainerId={currentUser._id} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TotalExercises trainerId={currentUser._id} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TotalWorkouts trainerId={currentUser._id} />
        </StyledCol>
      </Row>
      <Row>
        <Col span={24}>
          <NextAppointment trainerId={currentUser._id} />
        </Col>
      </Row>
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
