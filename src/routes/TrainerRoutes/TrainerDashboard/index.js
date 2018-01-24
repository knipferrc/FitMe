import ClientPreview from './ClientPreview'
import Col from 'antd/lib/col'
import DefaultLayout from 'layouts/DefaultLayout'
import ExerciseStats from './ExerciseStats'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'antd/lib/row'
import SchedulePreview from './SchedulePreview'
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

const TrainerDashboard = ({ user }) => (
  <DefaultLayout user={user}>
    <DashboardContainer>
      <Row gutter={8} style={{ marginBottom: 10 }}>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <WorkoutStats />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <ExerciseStats />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <SchedulePreview />
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
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerDashboard
