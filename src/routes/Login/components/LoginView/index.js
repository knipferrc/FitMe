import { Box } from 'grid-styled'
import Card from 'components/Card'
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

const LoginView = ({ history }) => {
  return (
    <DefaultLayout>
      <LoginViewContainer>
        <Box width={[1, 1 / 2, 1 / 2]} p={1}>
          <Card title="Welcome back to FitMe">
            <LoginForm history={history} />
          </Card>
        </Box>
      </LoginViewContainer>
    </DefaultLayout>
  )
}

export default LoginView
