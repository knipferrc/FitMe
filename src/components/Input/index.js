import styled from 'styled-components'

const Input = styled.input`
  background: #fff;
  border: ${props => (props.hasError ? '1px solid red' : 0)};
  outline: 0;
  height: 35px;
  padding: 10px; 18px;
  width: ${props => props.fullWidth && '100%'};
`

export default Input
