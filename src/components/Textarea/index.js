import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  background: #fff;
  border: ${props => (props.hasError ? '1px solid red' : 0)};
  outline: 0;
  padding: 10px; 18px;
  width: ${props => props.fullWidth && '100%'};
`

const Textarea = ({
  type,
  placeholder,
  value,
  rows,
  name,
  fullWidth,
  onChange,
  hasError
}) => {
  return (
    <StyledTextArea
      type={type}
      placeholder={placeholder}
      value={value}
      rows={rows || '4'}
      name={name}
      fullWidth={fullWidth}
      onChange={onChange}
      hasError={hasError}
    />
  )
}

export default Textarea
