import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import React from 'react'

const Sidebar = () => (
  <Menu
    style={{ width: 220, height: '100%' }}
    defaultSelectedKeys={['1']}
    mode="inline"
  >
    <Menu.Item key="1" style={{ marginTop: 0 }}>
      <Icon type="appstore-o" />Dashboard
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="api" />Workouts
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="database" />Exercises
    </Menu.Item>
    <Menu.Item key="4">
      <Icon type="calendar" /> Schedule
    </Menu.Item>
    <Menu.Item key="5">
      <Icon type="contacts" />Chat
    </Menu.Item>
  </Menu>
)

export default Sidebar
