import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import Popover from 'antd/lib/popover'
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

const menu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2">Logout</Menu.Item>
  </Menu>
)

const mobileMenu = (
  <Menu style={{ width: 220 }} defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" style={{ marginTop: 0 }}>
      <Icon type="appstore-o" />Dashboard
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="api" />Workout Builder
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="database" />Exercise Creator
    </Menu.Item>
    <Menu.Item key="4">
      <Icon type="calendar" /> My Schedule
    </Menu.Item>
    <Menu.Item key="5">
      <Icon type="contacts" />Live Chat
    </Menu.Item>
    <Menu.Item key="6">
      <Icon type="team" />My Profile
    </Menu.Item>
    <Menu.Item key="7">
      <Icon type="logout" />Logout
    </Menu.Item>
  </Menu>
)

const Navbar = () => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <NavbarRight>
      <AccountDropdown>
        <Dropdown overlay={menu}>
          <Button icon="setting" style={{ marginLeft: 8 }}>
            Username <Icon type="down" />
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

export default Navbar
