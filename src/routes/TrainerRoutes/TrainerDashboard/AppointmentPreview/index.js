import { Card } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const NoAppointments = styled.div`
  font-size: 1.3em;
  text-align: center;
`

const CardTitle = styled.div`
  text-align: center;
`

const AppointmentPreview = ({ error, loading, getNextAppointment }) => {
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
      {getNextAppointment ? (
        <div>{getNextAppointment.workoutDate}</div>
      ) : (
        <NoAppointments>
          You currently have no upcoming appointments
        </NoAppointments>
      )}
    </Card>
  )
}

AppointmentPreview.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  getNextAppointment: PropTypes.object
}

export default hoc(AppointmentPreview)
