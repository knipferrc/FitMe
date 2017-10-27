import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: #fff;
  border: 0;
  outline: 0;
  padding: 10px; 18px;
`

const Input = ({ placeholder, value, type }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} />
}

export default Input
