import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: #fff;
  border: ${props => (props.hasError ? '1px solid red' : 0)};
  outline: 0;
  height: 35px;
  padding: 10px; 18px;
  width: ${props => props.fullWidth && '100%'};
`

const Input = ({
  name,
  placeholder,
  value,
  type,
  fullWidth,
  onChange,
  hasError
}) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      fullWidth={fullWidth}
      onChange={onChange}
      hasError={hasError}
    />
  )
}

export default Input
