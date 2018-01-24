import Col from 'antd/lib/col'
import CreateExerciseForm from './CreateExerciseForm'
import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import Row from 'antd/lib/row'

const TrainerExerciseBuilder = ({ user }) => (
  <DefaultLayout user={user}>
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <CreateExerciseForm />
      </Col>
    </Row>
  </DefaultLayout>
)

export default TrainerExerciseBuilder
