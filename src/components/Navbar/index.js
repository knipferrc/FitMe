import Link from 'react-router-dom/Link'
import React from 'react'
import { auth } from 'lib/firebase'
import styled from 'styled-components'

const NavContainer = styled.div`
  background-image: linear-gradient(
    280deg,
    #141233 2%,
    #2d365a 55%,
    #394a74 85%,
    #3d598b 100%
  );
  height: 55px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 100;
`

const NavBrand = styled.div`
  padding-left: 15px;
  font-size: 2em;
  color: white;
`

const NavRight = styled.div`
  margin-left: auto;
  padding-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: #fff;
  margin-left: 20px;
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

const LogoutButton = styled.div`
  font-size: 1.1em;
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
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

const HamburgerMenu = styled.div`
  margin-left: auto;
  padding-right: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  width: 30px;
  height: 4px;
  background-color: #fff;
  margin: 6px 0;
`

const logout = async () => {
  await auth.signOut()
}

const Navbar = ({ toggleOpen, user }) => {
  return (
    <NavContainer>
      <NavBrand>FitMe</NavBrand>
      <HamburgerMenu onClick={() => toggleOpen(true)}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerMenu>
      <NavRight>
        {!user && <NavLink to="/login">Login</NavLink>}
        {!user && <NavLink to="/register">Register</NavLink>}
        {user && <LogoutButton onClick={logout}>Logout</LogoutButton>}
      </NavRight>
    </NavContainer>
  )
}

export default Navbar
