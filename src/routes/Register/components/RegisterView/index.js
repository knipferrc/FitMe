import { Box } from 'grid-styled'
import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import RegisterForm from '../../forms/RegisterForm'
import styled from 'styled-components'

const RegisterViewContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterView = ({ history }) => {
  return (
    <DefaultLayout>
      <RegisterViewContainer>
        <Box width={[1, 1 / 2, 1 / 2]} p={1}>
          <RegisterForm history={history} />
        </Box>
      </RegisterViewContainer>
    </DefaultLayout>
  )
}

export default RegisterView
