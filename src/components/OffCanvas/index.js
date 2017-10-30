import styled, { keyframes } from 'styled-components'

import { Portal } from 'react-portal'
import React from 'react'

const slideUp = keyframes`
  0% {
    transform:  translate(0px, 100vh)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
`

const OffCanvasContainer = styled.div`
  background: #f5f6fa;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  color: white;
  animation: ${slideUp} ease 0.3s;
`

const CloseIcon = styled.div`
  color: #fff;
  font-size: 2em;
  font-weight: bolder;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  margin-left: auto;
  padding-right: 10px;
  cursor: pointer;
`

const CanvasHeader = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background: #334e60;
`

const MenuText = styled.div`
  font-size: 1.5em;
  color: white;
  padding-left: 10px;
`

const OffCanvas = ({ open, toggleOpen }) => {
  return (
    <Portal>
      <OffCanvasContainer>
        <CanvasHeader open={open}>
          <MenuText>Main Menu</MenuText>
          <CloseIcon onClick={() => toggleOpen(false)}>
            <i className="fa fa-window-close" aria-hidden="true" />
          </CloseIcon>
        </CanvasHeader>
      </OffCanvasContainer>
    </Portal>
  )
}

export default OffCanvas
