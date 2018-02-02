import { Card, Col, Row, Tabs } from 'antd'

import PropTypes from 'prop-types'
import React from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import SimpleLayout from 'layouts/SimpleLayout'
import logo from 'assets/img/logo.png'
import styled from 'styled-components'

const TabPane = Tabs.TabPane

const LandingContainer = styled.div`
  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`

const Landing = ({ history }) => (
  <SimpleLayout>
    <LandingContainer>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Forgot Password?" bordered={false}>
            <p>
              Type your email associated with your account in the field below to
              receive your validation code by email.
            </p>
            <ForgotPasswordForm history={history} />
          </Card>
        </Col>
      </Row>
    </LandingContainer>
  </SimpleLayout>
)

Landing.propTypes = {
  history: PropTypes.object
}

export default Landing
