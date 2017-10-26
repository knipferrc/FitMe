import React from 'react'
import styled from 'styled-components'

const OffCanvasContainer = styled.div`
  background-image: linear-gradient(
    179deg,
    #2c2f39 2%,
    #363944 14%,
    #32353d 100%
  );
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  color: white;
`

const OffCanvas = () => {
  return <OffCanvasContainer>Content</OffCanvasContainer>
}

export default OffCanvasContainer
