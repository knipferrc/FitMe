import Navbar from 'common/components/Navbar'
import React from 'react'
import Sidebar from 'common/components/Sidebar'
import styled from 'styled-components'

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
`

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`

const ContentSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 55px;
  padding-left: 260px;
  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavSection>
        <Navbar />
      </NavSection>
      <SidebarSection>
        <Sidebar />
      </SidebarSection>
      <ContentSection>{children}</ContentSection>
    </div>
  )
}

export default DefaultLayout
