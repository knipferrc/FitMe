import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import hoc from './hoc'

const FormItem = Form.Item

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { form, register } = this.props

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        await register(
          values.email,
          values.password,
          values.firstName,
          values.lastName
        )
      }
    })
  }

  checkPassword = (rule, value, cb) => {
    const { form } = this.props

    if (value && value !== form.getFieldValue('password')) {
      cb('Two passwords that you enter is inconsistent')
    } else {
      cb()
    }
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '100%' }}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              name="email"
            />
          )}
        </FormItem>
        <FormItem>
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
        <FormItem>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please enter your first name' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="First Name"
              name="firstName"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
          Already have an account? <a href="">Login</a>
        </FormItem>
      </Form>
    )
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm)

export default hoc(WrappedRegisterForm)
