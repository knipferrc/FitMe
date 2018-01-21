import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import hoc from './hoc'

const FormItem = Form.Item

class LoginForm extends Component {
  handleSubmit = async e => {
    e.preventDefault()

    const { login } = this.props

    const email = e.target.email.value
    const password = e.target.password.value

    await login(email, password)
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: '100%' }}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }]
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
            rules: [{ required: true, message: 'Please input your Password!' }]
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a style={{ float: 'right' }} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm)

export default hoc(WrappedLoginForm)
