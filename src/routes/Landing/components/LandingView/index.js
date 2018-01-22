import Col from 'antd/lib/col'
import DefaultLayout from 'layouts/DefaultLayout'
import LoginForm from '../../forms/LoginForm'
import React from 'react'
import Row from 'antd/lib/row'
import styled from 'styled-components'

const LandingContainer = styled.div`
  padding-top: 20px;
`

const LandingView = () => (
  <DefaultLayout>
    <LandingContainer>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <LoginForm />
        </Col>
      </Row>
    </LandingContainer>
  </DefaultLayout>
)

export default LandingView
