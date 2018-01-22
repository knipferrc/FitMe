import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import React from 'react'
import styled from 'styled-components'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const NavbarContainer = styled.div`
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`

const Brand = styled.div`
  font-size: 2em;
  font-weight: 700;
  padding-right: 20px;
  padding-left: 10px;
`

const Navbar = () => (
  <NavbarContainer>
    <Brand>FitMe</Brand>
    <Menu selectedKeys={[0]} mode="horizontal">
      <Menu.Item key="mail">
        <Icon type="mail" />Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled>
        <Icon type="appstore" />Navigation Two
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <Icon type="setting" />Navigation Three - Submenu
          </span>
        }
      >
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  </NavbarContainer>
)

export default Navbar
