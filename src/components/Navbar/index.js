import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.4);
`

const Brand = styled.div`
  font-size: 2em;
  font-weight: 700;
  padding-right: 20px;
  padding-left: 10px;
`

const NavbarRight = styled.div`
  margin-left: auto;
  padding-right: 10px;
`

const menu = (
  <Menu>
    <Menu.Item key="1">Login</Menu.Item>
    <Menu.Item key="2">Register</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
)

const Navbar = () => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <NavbarRight>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Account <Icon type="down" />
        </Button>
      </Dropdown>
    </NavbarRight>
  </NavbarContainer>
)

export default Navbar
