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
  </Menu>
)

export default Sidebar
