import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border: ${props => props.inverted ? `1px solid ${props.theme.primary}` : 'none'};
  border-radius: ${props => props.theme.baseRadius};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  width: ${props => props.fullWidth && '100%'};
  font-size: ${props => {
    const { baseFontSize } = props.theme;
    const baseFontSizeParsed = parseInt(baseFontSize, 10);
    return (props.small && `${baseFontSizeParsed * 0.875}px`)
      || (props.large && `${baseFontSizeParsed * 1.375}px`)
      || baseFontSize;
  }};
  font-weight: ${props => props.theme.fontSemibold};
  line-height: ${props =>
    (props.small && '2.2') || (props.large && '1.25') || '2.5'
  };
  padding: ${props =>
    props.large ? '16px 25px 17px' : '0 12px'
  };
  position: relative;
  text-align: center;
  color: ${props =>
    (props.inverted && props.theme.primary)
    || (props.link && props.theme.baseFontColor)
    || '#fff'
  };
  background-color: ${props =>
    (props.primary && props.theme.primary)
    || (props.danger && props.theme.danger)
    || ((props.inverted || props.link) && '#fff')
    || (props.disabled && props.theme.brandGrey)
  };

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    ${props => props.link && 'text-decoration: underline;'}
  }
`;

export default Button
