import { Portal } from 'react-portal'
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

const CloseIcon = styled.div`
  color: #fff;
  font-size: 2em;
  font-weight: bolder;
  position: absolute;
  right: 5px;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  top: 5px;
  &:after {
    content: 'X';
  }
`

const OffCanvas = ({ toggleOpen }) => {
  return (
    <Portal>
      <OffCanvasContainer>
        Content
        <CloseIcon onClick={() => toggleOpen(false)} />
      </OffCanvasContainer>
    </Portal>
  )
}

export default OffCanvas
