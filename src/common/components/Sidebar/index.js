import Link from 'react-router-dom/Link'
import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  background-image: linear-gradient(
    179deg,
    #2c2f39 2%,
    #363944 14%,
    #32353d 100%
  );
  width: 260px;
  position: fixed;
  right: auto;
  bottom: 0;
  left: 0;
  height: 100%;
  top: 55px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  color: #fff;
`

const SidebarContent = styled.div`
  padding: 15px;
`

const NavItem = styled.div`
  margin-bottom: 15px;
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: white;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Dashboard</NavLink>
        </NavItem>
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
