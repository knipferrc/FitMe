import Col from 'antd/lib/col'
import CreateExerciseForm from './CreateExerciseForm'
import DefaultLayout from '../../../layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'antd/lib/row'

const TrainerExerciseBuilder = () => (
  <DefaultLayout>
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <CreateExerciseForm />
      </Col>
    </Row>
  </DefaultLayout>
)

TrainerExerciseBuilder.propTypes = {}

export default TrainerExerciseBuilder
