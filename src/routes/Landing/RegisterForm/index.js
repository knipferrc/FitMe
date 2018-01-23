import React, { PureComponent } from 'react'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import data from './data'

const FormItem = Form.Item

class RegisterForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    register: PropTypes.func,
    history: PropTypes.object
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, register, history } = this.props

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await register(
            values.email,
            values.password,
            values.firstName,
            values.lastName
          )
          localStorage.setItem('accesstoken', data.register)
          history.push('/dashboard')
        } catch (e) {
          console.log(e)
        }
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
        </FormItem>
      </Form>
    )
  }
}

export default data(RegisterForm)
