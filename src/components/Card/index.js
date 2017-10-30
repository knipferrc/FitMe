import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  box-shadow: ${props => props.theme.baseBoxShadow};
`

const CardHeader = styled.div`
  background: ${props => props.theme.primary};
  padding: 10px;
  display: flex;
  align-items: center;
  color: white;
  border-top-left-radius: ${props => props.theme.baseRadius};
  border-top-right-radius: ${props => props.theme.baseRadius};
`

const CardContent = styled.div`
  background: #fff;
  padding: 10px;
  border-bottom-left-radius: ${props => props.theme.baseRadius};
  border-bottom-right-radius: ${props => props.theme.baseRadius};
`

const Card = ({ children, title }) => {
  return (
    <CardContainer>
      {title && <CardHeader>{title}</CardHeader>}
      <CardContent>{children}</CardContent>
    </CardContainer>
  )
}

export default Card
