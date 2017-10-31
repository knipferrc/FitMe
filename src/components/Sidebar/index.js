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

const NavItem = styled.div`
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: ${props => props.theme.baseBorder};
  margin-top: 10px;
  padding-bottom: 10px;
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: black;
  text-transform: uppercase;
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
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      {user && (
        <NavItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
