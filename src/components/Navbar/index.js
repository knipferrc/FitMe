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
  color: #fff;
  cursor: pointer;
  font-size: 2em;
  @media (min-width: 768px) {
    display: none;
  }
`

const logout = async () => {
  await auth.signOut()
}

const Navbar = ({ toggleOpen, user }) => {
  return (
    <NavContainer>
      <NavBrand>FitMe</NavBrand>
      <HamburgerMenu onClick={() => toggleOpen(true)}>
        <i className="fa fa-align-right" aria-hidden="true" />
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
