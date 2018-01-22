import { Field, Form as FinalForm } from 'react-final-form'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import React from 'react'
import data from './data'

const FormItem = Form.Item

const required = value => (value ? undefined : true)

const onSubmit = async (values, login, history) => {
  try {
    const { data } = await login(values.email, values.password)
    localStorage.setItem('accesstoken', data.login)
    history.push('/dashboard')
  } catch (e) {
    console.log(e)
  }
}

const LoginForm = ({ login, history }) => (
  <FinalForm
    onSubmit={values => onSubmit(values, login, history)}
    render={({ handleSubmit, submitting }) => (
      <Form onSubmit={handleSubmit}>
        <Field name="email" validate={required}>
          {({ input, meta }) => (
            <FormItem
              label="Email"
              validateStatus={meta.error && meta.touched ? 'error' : null}
              hasFeedback
            >
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
                type="email"
                {...input}
              />
            </FormItem>
          )}
        </Field>
        <Field name="password" validate={required}>
          {({ input, meta }) => (
            <FormItem
              label="Password"
              validateStatus={meta.error && meta.touched ? 'error' : null}
              hasFeedback
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="password"
                type="password"
                {...input}
              />
            </FormItem>
          )}
        </Field>
        <Button
          loading={submitting}
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
        >
          Log In
        </Button>
      </Form>
    )}
  />
)

LoginForm.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object
}

export default data(LoginForm)
