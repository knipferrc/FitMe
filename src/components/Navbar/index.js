import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'
import MainMenu from '../MainMenu'
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

const Navbar = ({ currentUser }) => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <NavbarRight>
      <AccountDropdown>
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
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
          content={<MainMenu currentUser={currentUser} isMobile />}
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
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
}

export default Navbar
