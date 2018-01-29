import PropTypes from 'prop-types'
import React from 'react'
import background from '../assets/img/background.png'
import styled from 'styled-components'

const Backdrop = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`

const SimpleLayout = ({ children }) => <Backdrop>{children}</Backdrop>

SimpleLayout.propTypes = {
  children: PropTypes.node
}

export default SimpleLayout
