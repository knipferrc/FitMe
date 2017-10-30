import Link from 'react-router-dom/Link'
import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  background: #f8f9f9;
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
  border-right: 1px solid #e0e0e0;
`

const SidebarContent = styled.div`
  padding: 15px;
`

const NavItem = styled.div`
  margin-bottom: 15px;
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: black;
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

const Sidebar = ({ user }) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        {user && (
          <NavItem>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </NavItem>
        )}
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
