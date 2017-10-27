import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: #fff;
  border: 0;
  outline: 0;
  height: 35px;
  padding: 10px; 18px;
  width: ${props => props.fullWidth && '100%'};
`

const Input = ({ name, placeholder, value, type, fullWidth, onChange }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      fullWidth={fullWidth}
      onChange={onChange}
    />
  )
}

export default Input
