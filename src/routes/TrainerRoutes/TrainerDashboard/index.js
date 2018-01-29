import { Col, Row } from 'antd'

import AppointmentPreview from './AppointmentPreview'
import ClientPreview from './ClientPreview'
import DefaultLayout from '../../../layouts/DefaultLayout'
import ExerciseStats from './ExerciseStats'
import PropTypes from 'prop-types'
import React from 'react'
import WorkoutStats from './WorkoutStats'
import styled from 'styled-components'

const DashboardContainer = styled.div`
  padding: 5px;
`

const StyledCol = styled(Col)`
  @media (max-width: 740px) {
    margin-bottom: 5px;
  }
`

const TrainerDashboard = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <DashboardContainer>
      <Row gutter={8} style={{ marginBottom: 10 }}>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <WorkoutStats trainerId={currentUser._id} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <ExerciseStats trainerId={currentUser._id} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <AppointmentPreview trainerId={currentUser._id} />
        </StyledCol>
      </Row>
      <Row>
        <Col span={24}>
          <ClientPreview />
        </Col>
      </Row>
    </DashboardContainer>
  </DefaultLayout>
)

TrainerDashboard.propTypes = {
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

export default TrainerDashboard
