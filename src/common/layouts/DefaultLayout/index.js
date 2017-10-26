import Navbar from 'common/components/Navbar'
import OffCanvas from 'common/components/OffCanvas'
import React from 'react'
import Sidebar from 'common/components/Sidebar'
import hoc from './hoc'
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
  overflow-y: auto;
  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const DefaultLayout = ({ open, toggleOpen, children }) => {
  return (
    <div>
      <NavSection>
        <Navbar toggleOpen={toggleOpen} />
      </NavSection>
      <SidebarSection>
        <Sidebar />
      </SidebarSection>
      {open && <OffCanvas toggleOpen={toggleOpen} />}
      <ContentSection>{children}</ContentSection>
    </div>
  )
}

export default hoc(DefaultLayout)
