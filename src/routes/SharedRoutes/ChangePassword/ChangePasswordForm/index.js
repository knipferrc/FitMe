import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import UserType from '../../../../utils/constants/UserType'
import PropTypes from 'prop-types'
import hoc from './hoc'

const { ADMIN, TRAINER, CLIENT } = UserType
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 8 },
    lg: { span: 8 },
    xl: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 10 },
    lg: { span: 10 },
    xl: { span: 10 }
  }
}

class ChangePasswordForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    changePassword: PropTypes.func
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  toggleSubmitting = (errorMessage = null) => {
    this.setState({
      isSubmitting: !this.state.isSubmitting,
      errorMessage
    })
  }

  handleRedirect = role => {
    const { history } = this.props

    switch (role) {
      case TRAINER:
        history.push('/trainer/editProfile')
        break
      case ADMIN:
        history.push('/admin/editProfile')
        break
      case CLIENT:
        history.push('/client/editProfile')
        break
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, history, changePassword } = this.props

    this.toggleSubmitting()

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await changePassword(values.password)
          this.handleRedirect(data.changePassword.role)
        } catch (error) {
          console.log('ERROR: ', error)
          const errorMessage = error.graphQLErrors[0].message
          this.toggleSubmitting(errorMessage)
        }
      } else {
        this.toggleSubmitting()
      }
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

  render() {
    const { form: { getFieldDecorator } } = this.props
    const { isSubmitting, errorMessage } = this.state

    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '100%' }}>
        <FormItem {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="password"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
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
          <FormItem {...formItemLayout}>
            <Alert message={errorMessage} type="error" showIcon />
          </FormItem>
        )}
        <FormItem {...formItemLayout}>
          <Button
            loading={isSubmitting}
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            Change Password
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default hoc(ChangePasswordForm)
