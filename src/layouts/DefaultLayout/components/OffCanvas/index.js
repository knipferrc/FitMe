import styled, { keyframes } from 'styled-components';

import Link from 'react-router-dom/Link';
import { Portal } from 'react-portal';
import React from 'react';
import { auth } from 'lib/firebase';

const slideUp = keyframes`
  0% {
    transform:  translate(0px, 100vh)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
`;

const OffCanvasContainer = styled.div`
  background: #f5f6fa;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  color: white;
  animation: ${slideUp} ease 0.3s;
`;

const CloseIcon = styled.div`
  color: #fff;
  font-size: 2em;
  font-weight: bolder;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  margin-left: auto;
  padding-right: 10px;
  cursor: pointer;
`;

const CanvasHeader = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background: #334e60;
`;

const MenuText = styled.div`
  font-size: 1.5em;
  color: white;
  padding-left: 10px;
`;

const CanvasContent = styled.div`
  text-align: center;
`;

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
`;

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
`;

const LogoutButton = styled.a`
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
`;

const logout = async toggleOpen => {
  await auth.signOut();
  toggleOpen(false);
};

const OffCanvas = ({ open, toggleOpen, user }) => {
  return (
    <Portal>
      <OffCanvasContainer>
        <CanvasHeader open={open}>
          <MenuText>Main Menu</MenuText>
          <CloseIcon onClick={() => toggleOpen(false)}>
            <i className="fa fa-window-close" aria-hidden="true" />
          </CloseIcon>
        </CanvasHeader>
        <CanvasContent>
          {!user && (
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
          )}
          {!user && (
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          )}
          {!user && (
            <NavItem>
              <NavLink to="/register">Register</NavLink>
            </NavItem>
          )}
          {user && (
            <NavItem>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </NavItem>
          )}
          {user && (
            <NavItem onClick={() => logout(toggleOpen)}>
              <LogoutButton>Logout</LogoutButton>
            </NavItem>
          )}
        </CanvasContent>
      </OffCanvasContainer>
    </Portal>
  );
};

export default OffCanvas;
