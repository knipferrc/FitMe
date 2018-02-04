import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import React, { PureComponent, Fragment } from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import SimpleLayout from 'layouts/SimpleLayout'
import styled from 'styled-components'

const ForgotPasswordContainer = styled.div`
  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
`

class ForgotPassword extends PureComponent {
  static propTypes = {
    history: PropTypes.object
  }

  state = {
    showConfirmation: false
  }

  toggleShowConfirmation = () => {
    this.setState({
      showConfirmation: !this.state.showConfirmation
    })
  }

  render() {
    const { showConfirmation } = this.state

    return (
      <SimpleLayout>
        <ForgotPasswordContainer>
          <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Card title="Forgot Password?" bordered={false}>
                {!showConfirmation && (
                  <Fragment>
                    <p>
                      Type your email associated with your account in the field
                      below to receive your validation code by email.
                    </p>
                    <ForgotPasswordForm
                      history={history}
                      toggleShowConfirmation={this.toggleShowConfirmation}
                    />
                  </Fragment>
                )}
                {showConfirmation && (
                  <Fragment>
                    <p>
                      Please check your email in a few minutes and follow the
                      instructions provided to reset your password.
                    </p>
                    <Link to="/login">Return to Login</Link>
                  </Fragment>
                )}
              </Card>
            </Col>
          </Row>
        </ForgotPasswordContainer>
      </SimpleLayout>
    )
  }
}

export default ForgotPassword
