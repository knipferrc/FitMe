import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import UserType from '../../../../utils/constants/UserType'
import hoc from './hoc'
import PropTypes from 'prop-types'

const { ADMIN, TRAINER, CLIENT } = UserType
const FormItem = Form.Item

class ResetPasswordForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
    resetPassword: PropTypes.func
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  parseQueryString = queryString => {
    const searchParams = new URLSearchParams(queryString)
    return searchParams.get('token')
  }

  toggleSubmitting = (errorMessage = null) => {
    this.setState({
      isSubmitting: !this.state.isSubmitting,
      errorMessage
    })
  }

  checkPassword = (rule, value, cb) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      cb('Your passwords must match')
    } else {
      cb()
    }
  }

  handleRedirect = role => {
    const { history } = this.props

    switch (role) {
      case TRAINER:
        history.push('/trainer/dashboard')
        break
      case ADMIN:
        history.push('/admin/dashboard')
        break
      case CLIENT:
        history.push('/client/dashboard')
        break
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, resetPassword, location } = this.props

    this.toggleSubmitting()

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const token = this.parseQueryString(location.search)

          const { data } = await resetPassword(values.password, token)

          localStorage.setItem('accessToken', data.resetPassword.accessToken)

          this.handleRedirect(data.resetPassword.role)
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
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please choose your password' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              name="password"
              type="password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: 'Please confirm your password' },
              { validator: this.checkPassword }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
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
            Reset Password
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default hoc(ResetPasswordForm)
