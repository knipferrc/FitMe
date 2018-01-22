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

const onSubmit = async (values, register) => {
  await register(
    values.email,
    values.password,
    values.firstName,
    values.lastName
  )
}

const RegisterForm = ({ register }) => (
  <FinalForm
    onSubmit={values => onSubmit(values, register)}
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
        <Field name="firstName" validate={required}>
          {({ input, meta }) => (
            <FormItem
              label="First Name"
              validateStatus={meta.error && meta.touched ? 'error' : null}
              hasFeedback
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="first name"
                type="text"
                {...input}
              />
            </FormItem>
          )}
        </Field>
        <Field name="lastName" validate={required}>
          {({ input, meta }) => (
            <FormItem
              label="Last Name"
              validateStatus={meta.error && meta.touched ? 'error' : null}
              hasFeedback
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="last name"
                type="text"
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
          Register
        </Button>
      </Form>
    )}
  />
)

RegisterForm.propTypes = {
  register: PropTypes.func
}

export default data(RegisterForm)
