import { Box } from 'grid-styled'
import Button from 'components/Button'
import { Formik } from 'formik'
import Input from 'components/Input'
import React from 'react'

const LoginForm = ({ history }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          setSubmitting(true)
          history.push('/dashboard')
        } catch (e) {
          setSubmitting(false)
          setErrors({ submitError: e.graphQLErrors[0].message })
        }
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login</legend>
            <Box m={20}>
              <label>Email:</label>
              <Input
                name="email"
                fullWidth
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter you email"
              />
            </Box>
            <Box m={20}>
              <label>Password:</label>
              <Input
                name="password"
                fullWidth
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter you password"
              />
            </Box>
            <Box m={20}>
              <Button fullWidth type="submit">
                Login
              </Button>
            </Box>
          </fieldset>
        </form>
      )}
    />
  )
}

export default LoginForm
