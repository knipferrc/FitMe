import { Alert, Button, Form, Icon, Input } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import UserType from '../../../../utils/constants/UserType'
import axios from '../../../../utils/axios'

const { ADMIN, TRAINER, CLIENT } = UserType
const FormItem = Form.Item

class LoginForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  handleRedirect = role => {
    const { history } = this.props

    switch (role) {
      case TRAINER:
        history.push('/trainer-dashboard')
        break
      case ADMIN:
        history.push('/admin-dashboard')
        break
      case CLIENT:
        history.push('/client-dashboard')
        break
    }
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
          const { data } = await axios.post('login', {
            email: values.email,
            password: values.password
          })

          localStorage.setItem('accessToken', data.user.accessToken)

          this.handleRedirect(data.user.role)
        } catch (error) {
          const { message } = error.response.data
          this.setState({
            isSubmitting: false,
            errorMessage: message
          })
        }
      } else {
        this.setState({
          isSubmitting: false
        })
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
            Log In
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(LoginForm)
