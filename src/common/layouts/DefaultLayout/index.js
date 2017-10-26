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
`

const ContentSection = styled.div`
  margin-left: 260px;
  margin-top: 55px;
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
