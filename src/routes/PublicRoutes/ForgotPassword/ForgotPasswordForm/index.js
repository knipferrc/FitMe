import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import hoc from './hoc'
import PropTypes from 'prop-types'

const FormItem = Form.Item

class ForgotPasswordForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    sendResetPasswordEmail: PropTypes.func,
    toggleShowConfirmation: PropTypes.func
  }

  state = {
    isSubmitting: false,
    errorMessage: null,
    showConfirmation: false
  }

  toggleSubmitting = (errorMessage = null) => {
    this.setState({
      isSubmitting: !this.state.isSubmitting,
      errorMessage
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, sendResetPasswordEmail, toggleShowConfirmation } = this.props

    this.toggleSubmitting()

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await sendResetPasswordEmail(values.email)
          toggleShowConfirmation()
        } catch (error) {
          const message = error.graphQLErrors[0].message
          this.toggleSubmitting(message)
        }
      } else {
        this.toggleSubmitting()
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const { isSubmitting, errorMessage } = this.state

    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '100%' }}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              name="email"
            />
          )}
        </FormItem>
        {errorMessage && (
          <FormItem>
            <Alert message={errorMessage} type="error" showIcon />
          </FormItem>
        )}
        <FormItem>
          <Button
            loading={isSubmitting}
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            Send Password Reset Link
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default hoc(ForgotPasswordForm)
