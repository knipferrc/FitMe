import { Field, Form as FinalForm } from 'react-final-form'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'

const FormItem = Form.Item

const required = value => (value ? undefined : true)

const onSubmit = async (values, login) => {
  await login(values.email, values.password)
}

const LoginForm = ({ login }) => (
  <FinalForm
    onSubmit={values => onSubmit(values, login)}
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
  login: PropTypes.func
}

export default hoc(LoginForm)
