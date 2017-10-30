import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const PageLoader = () => {
  return (
    <LoadingContainer>
      <i className="fa fa-spinner fa-spin fa-4x" />
    </LoadingContainer>
  )
}

export default PageLoader
