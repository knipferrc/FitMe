import DefaultLayout from 'layouts/DefaultLayout'
import LoginForm from '../../forms/LoginForm'
import React from 'react'
import styled from 'styled-components'

const LoginViewContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
