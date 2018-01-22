import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'
import Menu from 'antd/lib/menu'
import React from 'react'

const Sidebar = () => (
  <Menu
    style={{ width: 220, height: '100%' }}
    defaultSelectedKeys={['1']}
    mode="inline"
  >
    <Menu.Item key="1" style={{ marginTop: 0 }}>
      <Link to="/dashboard">
        <Icon type="appstore-o" />Dashboard
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/workout-builder">
        <Icon type="api" />Workout Builder
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/exercise-builder">
        <Icon type="database" />Exercise Builder
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/my-schedule">
        <Icon type="calendar" /> My Schedule
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/live-chat">
        <Icon type="contacts" />Live Chat
      </Link>
    </Menu.Item>
  </Menu>
)

export default Sidebar
