import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  transform: translate3d(0, 0, 0);
  border: 0;
  display: inline-block;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
`

const Button = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>
}

export default Button
