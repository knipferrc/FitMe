import DefaultLayout from 'common/layouts/DefaultLayout'
import LoginForm from '../../forms/LoginForm'
import React from 'react'
import styled from 'styled-components'

const LoginViewContainer = styled.div`
margin-left: 100px;
`

const LoginView = () => {
  return (
    <DefaultLayout>
      <LoginViewContainer>
      <LoginForm />
      </LoginViewContainer>
    </DefaultLayout>
  )
}

export default LoginView
