import { Card, Col, Row, Tabs } from 'antd'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import React, { PureComponent, Fragment } from 'react'
import ResetPasswordForm from './ResetPasswordForm'
import SimpleLayout from 'layouts/SimpleLayout'
import logo from 'assets/img/logo.png'
import styled from 'styled-components'

const TabPane = Tabs.TabPane

const ResetPasswordContainer = styled.div`
  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
`

const ResetPassword = ({ history, location }) => (
  <SimpleLayout>
    <ResetPasswordContainer>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Reset Password" bordered={false}>
            <ResetPasswordForm history={history} location={location} />
          </Card>
        </Col>
      </Row>
    </ResetPasswordContainer>
  </SimpleLayout>
)

ResetPassword.propTypes = {
  history: PropTypes.object
}

export default ResetPassword
