import Col from 'antd/lib/col'
import CreateExerciseForm from './CreateExerciseForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
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

TrainerExerciseBuilder.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default TrainerExerciseBuilder
