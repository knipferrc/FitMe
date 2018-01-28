import React, { PureComponent } from 'react'

import message from 'antd/lib/message'
import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import UserType from '../../../../utils/constants/UserType'
import data from './data'
import axios from '../../../../utils/axios'

const { ADMIN, TRAINER, CLIENT } = UserType
const FormItem = Form.Item

class LoginForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    login: PropTypes.func,
    history: PropTypes.object,
    initializeUser: PropTypes.func
  }

  state = {
    isSubmitting: false
  }

  doUserRedirect = role => {
    const { history } = this.props

    if (role === TRAINER) {
      history.push('/trainer-dashboard')
    } else if (role === ADMIN) {
      history.push('/admin-dashboard')
    } else if (role === CLIENT) {
      history.push('/client-dashboard')
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, login, history, initializeUser } = this.props

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

          initializeUser(data.user.accessToken)
          this.doUserRedirect(data.user.role)
        } catch (error) {
          const { message: errorMessage } = error.response.data
          message.error(errorMessage)
          this.setState({
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

export default data(LoginForm)
