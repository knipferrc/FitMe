import { Card } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const NoAppointmentsText = styled.div`
  font-size: 1.3em;
  text-align: center;
`

const CardTitle = styled.div`
  text-align: center;
`

const NextAppointment = ({ error, loading, trainersNextAppointment }) => {
  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    return (
      <Card
        title={<CardTitle>Next Appointment</CardTitle>}
        style={{ height: 210 }}
        loading
      >
        loading
      </Card>
    )
  }

  return (
    <Card
      title={<CardTitle>Next Appointment</CardTitle>}
      style={{ height: 210 }}
    >
      {trainersNextAppointment ? (
        <div>{trainersNextAppointment.workoutDate}</div>
      ) : (
        <NoAppointmentsText>
          You currently have no upcoming appointments
        </NoAppointmentsText>
      )}
    </Card>
  )
}

NextAppointment.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  trainersNextAppointment: PropTypes.object
}

export default hoc(NextAppointment)
