import { Card } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const ExerciseCount = styled.div`
  font-size: 5em;
  text-align: center;
`

const CardTitle = styled.div`
  text-align: center;
`

const ExerciseStats = ({ error, loading, trainersExerciseCount }) => {
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
      <ExerciseCount>{trainersExerciseCount}</ExerciseCount>
    </Card>
  )
}

ExerciseStats.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  trainersExerciseCount: PropTypes.number
}

export default hoc(ExerciseStats)
