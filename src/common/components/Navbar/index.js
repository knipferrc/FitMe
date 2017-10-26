import Link from 'react-router-dom/Link'
import React from 'react'
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
`

const NavBrand = styled.div`
  padding-left: 15px;
  font-size: 2em;
  color: white;
`

const NavRight = styled.div`
  margin-left: auto;
  padding-right: 15px;
`

const NavLink = styled(Link)`
  font-size: 1.1em;
  color: white;
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

const Navbar = () => {
  return (
    <NavContainer>
      <NavBrand>FitMe</NavBrand>
      <NavRight>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Register</NavLink>
        <NavLink to="/">Logout</NavLink>
      </NavRight>
    </NavContainer>
  )
}

export default Navbar
