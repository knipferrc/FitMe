import React, { PureComponent } from 'react'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import UserType from '../../../../lib/constants/UserType'
import withData from './withData'

const { ADMIN, TRAINER, CLIENT } = UserType
const FormItem = Form.Item

class LoginForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    login: PropTypes.func,
    history: PropTypes.object
  }

  state = {
    isSubmitting: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, login, history } = this.props

    this.setState({
      isSubmitting: true
    })

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await login(values.email, values.password)
          localStorage.setItem('accesstoken', data.login.accessToken)

          if (data.login.role === TRAINER) {
            history.push('/trainer-dashboard')
          } else if (data.login.role === ADMIN) {
            history.push('/admin-dashboard')
          } else if (data.login.role === CLIENT) {
            history.push('/client-dashboard')
          }
        } catch (e) {
          this.setState({
            isSubmitting: false
          })
          console.log(e)
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
    const { isSubmitting } = this.state

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

export default withData(LoginForm)
