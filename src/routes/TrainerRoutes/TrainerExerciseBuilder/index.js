import { Col, Row } from 'antd'

import CreateExerciseForm from './CreateExerciseForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const TrainerExerciseBuilder = ({ currentUser, history, location }) => (
  <DefaultLayout
    currentUser={currentUser}
    history={history}
    location={location}
  >
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <CreateExerciseForm />
      </Col>
    </Row>
  </DefaultLayout>
)

TrainerExerciseBuilder.propTypes = {
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

export default TrainerExerciseBuilder
