import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #334e60;
`

const PageLoader = () => {
  return (
    <LoadingContainer>
      <i className="fa fa-spinner fa-pulse fa-4x" />
    </LoadingContainer>
  )
}

export default PageLoader
