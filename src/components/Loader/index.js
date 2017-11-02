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

const LoaderContainer = styled.div`
  animation: ${spin} 0.5s linear infinite;
  color: white;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <i className="material-icons">cached</i>
    </LoaderContainer>
  )
}

export default Loader
