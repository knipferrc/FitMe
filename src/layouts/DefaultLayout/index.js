import React, { Fragment } from 'react'

import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 64px;
`

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navbar />
    <ContentContainer>{children}</ContentContainer>
  </Fragment>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
