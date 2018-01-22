import { Redirect, Route } from 'react-router-dom'

import Card from 'antd/lib/card'
import Col from 'antd/lib/col'
import LoginForm from './LoginForm'
import React from 'react'
import RegisterForm from './RegisterForm'
import Row from 'antd/lib/row'
import SimpleLayout from 'layouts/SimpleLayout'
import Tabs from 'antd/lib/tabs'
import logo from 'assets/logo.png'
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

const Landing = () => (
  <Route
    render={() =>
      1 === 1 ? (
        <SimpleLayout>
          <LandingContainer>
            <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Card bordered={false}>
                  <ImageContainer>
                    <img alt="logo" height="100" width="100" src={logo} />
                  </ImageContainer>
                  <Tabs
                    defaultActiveKey="1"
                    tabBarStyle={{ textAlign: 'center' }}
                  >
                    <TabPane tab="Login" key="1">
                      <LoginForm />
                    </TabPane>
                    <TabPane tab="Register" key="2">
                      <RegisterForm />
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
          </LandingContainer>
        </SimpleLayout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
)

export default Landing
