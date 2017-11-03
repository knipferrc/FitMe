import { Box, Flex } from 'grid-styled'
import styled, { keyframes } from 'styled-components'

import Card from 'components/Card'
import Link from 'react-router-dom/Link'
import { Portal } from 'react-portal'
import React from 'react'
import { auth } from 'lib/firebase'

const slideUp = keyframes`
  0% {
    transform:  translate(0px, 100vh)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
`

const OffCanvasContainer = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  animation: ${slideUp} ease 0.3s;
`

const CloseIcon = styled.div`
  color: #fff;
  font-weight: bolder;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  margin-left: auto;
  padding-right: 10px;
  cursor: pointer;
`

const CanvasHeader = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background: linear-gradient(
    280deg,
    #141233 2%,
    #2d365a 55%,
    #394a74 85%,
    #3d598b 100%
  );
`

const MenuText = styled.div`
  font-size: 1.5em;
  color: white;
  padding-left: 10px;
`

const NavItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const NavLink = styled(Link)`
  font-size: 0.9em;
  color: #000;
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
  font-size: 0.9em;
  color: #000;
`

const logout = async toggleOpen => {
  await auth.signOut()
  toggleOpen(false)
}

const OffCanvas = ({ open, toggleOpen, user }) => {
  return (
    <Portal>
      <OffCanvasContainer>
        <CanvasHeader open={open}>
          <MenuText>Main Menu</MenuText>
          <CloseIcon onClick={() => toggleOpen(false)}>
            <i className="material-icons">close</i>
          </CloseIcon>
        </CanvasHeader>
        {!user && (
          <Flex>
            <Box width={1 / 2} m={1}>
              <Card>
                <NavItem>
                  <i className="material-icons">home</i>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
              </Card>
            </Box>
            <Box width={1 / 2} m={1}>
              <Card>
                <NavItem>
                  <i className="material-icons">open_in_browser</i>
                  <NavLink to="/login">Login</NavLink>
                </NavItem>
              </Card>
            </Box>
          </Flex>
        )}
        {!user && (
          <Flex>
            <Box width={1 / 2} m={1} pr={2}>
              <Card>
                <NavItem>
                  <i className="material-icons">perm_contact_calendar</i>
                  <NavLink to="/register">Register</NavLink>
                </NavItem>
              </Card>
            </Box>
          </Flex>
        )}
        {user && (
          <Flex>
            <Box width={1 / 2} m={1}>
              <Card>
                <NavItem>
                  <i className="material-icons">dashboard</i>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </NavItem>
              </Card>
            </Box>
            <Box width={1 / 2} m={1}>
              <Card>
                <NavItem>
                  <i className="material-icons">power_settings_new</i>
                  <LogoutButton onClick={() => logout(toggleOpen)}>
                    Logout
                  </LogoutButton>
                </NavItem>
              </Card>
            </Box>
          </Flex>
        )}
      </OffCanvasContainer>
    </Portal>
  )
}

export default OffCanvas
