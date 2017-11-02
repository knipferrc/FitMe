import Link from 'react-router-dom/Link'
import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  background: #f5f5f6;
  width: 120px;
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
  height: 50px;
  display: flex;
  color: #000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-bottom: ${props => props.theme.baseBorder};
  margin-top: 10px;
  padding-bottom: 10px;
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
      {!user && (
        <NavItem>
          <i className="material-icons">home</i>
          <NavLink to="/">Home</NavLink>
        </NavItem>
      )}
      {user && (
        <NavItem>
          <i className="material-icons">dashboard</i>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
