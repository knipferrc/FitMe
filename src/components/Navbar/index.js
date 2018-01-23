import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'
import Menu from 'antd/lib/menu'
import Popover from 'antd/lib/popover'
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

const handleLogout = () => {
  localStorage.removeItem('accesstoken')
  window.location.href = '/'
}

const dropdownMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/my-profile">
        <Icon type="user" style={{ marginRight: 3 }} />My Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#!" onClick={handleLogout}>
        <Icon type="logout" style={{ marginRight: 3 }} />
        Logout
      </a>
    </Menu.Item>
  </Menu>
)

const mobileMenu = (
  <Menu style={{ width: 220 }} defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" style={{ marginTop: 0 }}>
      <Link to="/dashboard">
        <Icon type="appstore-o" />Dashboard
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/client-management">
        <Icon type="team" />Client Management
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/workout-builder">
        <Icon type="api" />Workout Builder
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/exercise-builder">
        <Icon type="database" />Exercise Builder
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/my-schedule">
        <Icon type="calendar" /> My Schedule
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link to="/live-chat">
        <Icon type="contacts" />Live Chat
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link to="/my-profile">
        <Icon type="team" />My Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <a href="#!" onClick={handleLogout}>
        <Icon type="logout" />Logout
      </a>
    </Menu.Item>
  </Menu>
)

const Navbar = ({ user }) => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <NavbarRight>
      <AccountDropdown>
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <Button icon="setting" style={{ marginLeft: 8 }}>
            {user.email}
            <Icon type="down" />
          </Button>
        </Dropdown>
      </AccountDropdown>
      <MobileMenu>
        <Popover
          placement="bottomRight"
          arrowPointAtCenter
          content={mobileMenu}
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
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
}

export default Navbar
