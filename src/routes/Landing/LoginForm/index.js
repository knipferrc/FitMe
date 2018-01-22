import React, { PureComponent } from 'react'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import data from './data'

const FormItem = Form.Item

class LoginForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault()
    const { form, login, history } = this.props

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          const { data } = await login(values.email, values.password)
          localStorage.setItem('accesstoken', data.login)
          history.push('/dashboard')
        } catch (e) {
          console.log(e)
        }
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
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
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log In
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default data(LoginForm)
