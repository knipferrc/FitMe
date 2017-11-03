import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(180deg, #516fad 4%, #3b5a9e 97%);
  color: white;
  outline: none;
  border: ${props =>
    props.inverted ? `1px solid ${props.theme.primary}` : 'none'};
  cursor: pointer;
  font-size: 1em;
  display: inline-block;
  width: ${props => props.fullWidth && '100%'};
  font-weight: 600;
  position: relative;
  text-align: center;
  padding: 10px 15px;
  border-radius: ${props => props.theme.baseRadius};
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

export default Button
