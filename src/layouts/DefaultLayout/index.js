import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import React from 'react'
import Sidebar from 'components/Sidebar'
import styled from 'styled-components'

const DefaultLayoutContainer = styled.div`
  display: flex;
  height: 100%;
`

const SidebarContainer = styled.div`
  height: 100%;
  position: fixed;
  top: 64px;
  @media (max-width: 740px) {
    display: none;
  }
`

const ContentContainer = styled.div`
  margin-top: 64px;
  margin-left: 220px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  @media (max-width: 740px) {
    margin-left: 0;
  }
`

const DefaultLayout = ({ children }) => (
  <DefaultLayoutContainer>
    <Navbar />
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
    <ContentContainer>{children}</ContentContainer>
  </DefaultLayoutContainer>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
