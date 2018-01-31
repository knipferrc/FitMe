import { Button, Dropdown, Icon, Menu, Popover } from 'antd'

import { Link } from 'react-router-dom'
import MainMenu from '../MainMenu'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  height: 64px;
  background: #1890ff;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  box-shadow: 0 3px 8px #f0f1f2;
`

const Brand = styled.div`
  font-size: 2em;
  font-weight: 700;
  padding-right: 20px;
  padding-left: 10px;
  color: #fff;
`

const NavbarRight = styled.div`
  margin-left: auto;
  padding-right: 10px;
`

const AccountDropdown = styled.div`
  @media (max-width: 740px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: none;
  color: white;
  @media (max-width: 740px) {
    display: initial;
    font-size: 1.5em;
  }
`

const handleLogout = async () => {
  localStorage.removeItem('accessToken')
  window.location.href = '/'
}

const getProfileLink = role => {
  switch (role) {
    case 'TRAINER':
      return '/trainer/profile'
    case 'ADMIN':
      return '/admin/profile'
    case 'CLIENT':
      return '/client/profile'
    default:
      return '/'
  }
}

const dropdownMenu = currentUser => (
  <Menu>
    <Menu.Item key="1">
      <Link to={getProfileLink(currentUser.role)}>
        <Icon type="user" style={{ marginRight: 5 }} />My Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#!" onClick={handleLogout}>
        <Icon type="logout" style={{ marginRight: 5 }} />
        Logout
      </a>
    </Menu.Item>
  </Menu>
)

const Navbar = ({ currentUser, history, location }) => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <NavbarRight>
      <AccountDropdown>
        <Dropdown overlay={dropdownMenu(currentUser)} trigger={['click']}>
          <Button icon="setting" style={{ marginLeft: 8 }}>
            {currentUser.email}
            <Icon type="down" />
          </Button>
        </Dropdown>
      </AccountDropdown>
      <MobileMenu>
        <Popover
          placement="bottomRight"
          arrowPointAtCenter
          content={
            <MainMenu
              currentUser={currentUser}
              location={location}
              history={history}
              isMobile
            />
          }
          trigger="click"
          title="Main Menu"
        >
          <Icon type="menu-fold" />
        </Popover>
      </MobileMenu>
    </NavbarRight>
  </NavbarContainer>
)

Navbar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  currentUser: PropTypes.shape({
    _id: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
}

export default Navbar
