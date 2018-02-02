import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import hoc from './hoc'
import PropTypes from 'prop-types'

const FormItem = Form.Item

class ForgotPasswordForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    sendResetPasswordEmail: PropTypes.func
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form } = this.props

    this.setState({
      isSubmitting: true
    })

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
        } catch (error) {}
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
