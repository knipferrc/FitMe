import { Card } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const CountText = styled.div`
  font-size: 5em;
  text-align: center;
`

const CardTitle = styled.div`
  text-align: center;
`

const TotalExercises = ({ error, loading, trainersTotalExercises }) => {
  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    return (
      <Card
        title={<CardTitle>Total Exercisees</CardTitle>}
        style={{ height: 210 }}
        loading
      >
        loading
      </Card>
    )
  }

  return (
    <Card
      title={<CardTitle>Total Exercises</CardTitle>}
      style={{ height: 210 }}
    >
      <CountText>{trainersTotalExercises}</CountText>
    </Card>
  )
}

TotalExercises.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  trainersTotalExercises: PropTypes.number
}

export default hoc(TotalExercises)
