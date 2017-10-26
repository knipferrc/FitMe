import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  background: #fff;
  border: 0;
  outline: 0;
  padding: 10px; 18px;
`

const Textarea = ({ placeholder, value, type, rows }) => {
  return (
    <StyledTextArea
      type={type}
      placeholder={placeholder}
      value={value}
      rows={rows || '4'}
    />
  )
}

export default Textarea
