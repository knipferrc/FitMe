import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import axios from 'utils/axios'

const FormItem = Form.Item

class RegisterForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, history } = this.props

    this.setState({
      isSubmitting: true
    })

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await axios.post('register', {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName
          })

          localStorage.setItem('accessToken', data.user.accessToken)

          history.push('/trainer/dashboard')
        } catch (error) {
          const { message } = error.response.data
          this.setState({
            errorMessage: message,
            isSubmitting: false
          })
        }
      } else {
        this.setState({
          isSubmitting: false
        })
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
              prefix={
                <Icon
                  type="right-square"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
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
              prefix={
                <Icon type="left-square" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              type="text"
              placeholder="Last Name"
              name="lastName"
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
            Register
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(RegisterForm)
