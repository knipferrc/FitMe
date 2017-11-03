import Link from 'react-router-dom/Link'
import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  background: linear-gradient(179deg, #2c2f39 2%, #363944 14%, #32353d 100%);
  width: 260px;
  position: fixed;
  right: auto;
  bottom: 0;
  left: 0;
  height: 100%;
  top: 64px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  color: #fff;
  border-right: 1px solid #e0e0e0;
`

const NavItem = styled.div`
  height: 50px;
  display: flex;
  color: #fff;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: #fff;
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
      {!user && (
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
      )}
      {user && (
        <NavItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
