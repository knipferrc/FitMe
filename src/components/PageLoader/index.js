import React from 'react'
import Spin from 'antd/lib/spin'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
`

const PageLoader = () => (
  <LoadingContainer>
    <Spin size="large" />
  </LoadingContainer>
)

export default PageLoader
