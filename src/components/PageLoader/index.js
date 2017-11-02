import styled, { keyframes } from 'styled-components'

import React from 'react'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${spin} 0.5s linear infinite;
`

const PageLoader = () => {
  return (
    <LoadingContainer>
      <i style={{ fontSize: '3.5em' }} className="material-icons">
        cached
      </i>
    </LoadingContainer>
  )
}

export default PageLoader
