import { Box } from 'grid-styled'
import Button from 'components/Button'
import { Formik } from 'formik'
import Input from 'components/Input'
import React from 'react'
import { auth } from 'lib/firebase'

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
          await auth.signInWithEmailAndPassword(values.email, values.password)
          history.push('/dashboard')
        } catch (e) {
          setSubmitting(false)
          setErrors({ submitError: e.message })
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
            {errors.submitError && <div>{errors.submitError}</div>}
            <Box m={20}>
              <label>Email:</label>
              <Input
                name="email"
                fullWidth
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter you email"
                hasError={touched.email && errors.email}
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
                hasError={touched.password && errors.password}
              />
            </Box>
            <Box m={20}>
              <Button fullWidth type="submit">
                {isSubmitting ? <i className="fa fa-spinner fa-spin"></i> : 'Login'}
              </Button>
            </Box>
          </fieldset>
        </form>
      )}
    />
  )
}

export default LoginForm
