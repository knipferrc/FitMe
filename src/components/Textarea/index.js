import styled from 'styled-components'

const Textarea = styled.textarea`
  background: #fff;
  border: ${props => (props.hasError ? '1px solid red' : 0)};
  outline: 0;
  padding: 10px; 18px;
  width: ${props => props.fullWidth && '100%'};
`

export default Textarea
