import { Icon, Menu } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import UserType from 'utils/constants/UserType'

const { ADMIN, TRAINER } = UserType

class MainMenu extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      _id: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    history: PropTypes.object,
    location: PropTypes.object,
    isMobile: PropTypes.bool
  }

  state = {
    selectedKeys: []
  }

  componentWillReceiveProps() {
    const { location } = this.props
    this.setState({ selectedKeys: [location.pathname] })
  }

  componentDidMount() {
    const { location } = this.props
    this.setState({ selectedKeys: [location.pathname] })
  }

  logout = () => {
    localStorage.removeItem('accesstoken')
    window.location.href = '/'
  }

  renderTrainerMenu = (history, selectedKeys) => (
    <Menu
      style={{ width: 220, height: '100%' }}
      defaultSelectedKeys={['/dashboard']}
      selectedKeys={selectedKeys}
      mode="inline"
      onClick={item =>
        item.key === 'logout' ? this.logout() : history.push(item.key)
      }
    >
      <Menu.Item key="/trainer-dashboard" style={{ marginTop: 0 }}>
        <Icon type="dashboard" />Dashboard
      </Menu.Item>
      <Menu.Item key="/trainer-client-management">
        <Icon type="team" />Client Management
      </Menu.Item>
      <Menu.Item key="/trainer-workout-builder">
        <Icon type="appstore-o" />Workout Builder
      </Menu.Item>
      <Menu.Item key="/trainer-exercise-builder">
        <Icon type="database" />Exercise Builder
      </Menu.Item>
      <Menu.Item key="/trainer-appointments">
        <Icon type="calendar" /> Appointments
      </Menu.Item>
      <Menu.Item key="/trainer-chat">
        <Icon type="rocket" />Live Chat
      </Menu.Item>
      {this.props.isMobile && (
        <Menu.Item key="logout">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      )}
    </Menu>
  )

  renderClientMenu = (history, selectedKeys) => (
    <Menu
      style={{ width: 220, height: '100%' }}
      defaultSelectedKeys={['/admin-dashboard']}
      selectedKeys={selectedKeys}
      mode="inline"
      onClick={item =>
        item.key === 'logout' ? this.logout() : history.push(item.key)
      }
    >
      <Menu.Item key="/client-dashboard" style={{ marginTop: 0 }}>
        <Icon type="appstore-o" />Client Dashboard
      </Menu.Item>
      {this.props.isMobile && (
        <Menu.Item key="logout">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      )}
    </Menu>
  )

  renderAdminMenu = (history, selectedKeys) => (
    <Menu
      style={{ width: 220, height: '100%' }}
      defaultSelectedKeys={['/admin-dashboard']}
      selectedKeys={selectedKeys}
      mode="inline"
      onClick={item =>
        item.key === 'logout' ? this.logout() : history.push(item.key)
      }
    >
      <Menu.Item key="/admin-dashboard" style={{ marginTop: 0 }}>
        <Icon type="appstore-o" />Admin Dashboard
      </Menu.Item>
      {this.props.isMobile && (
        <Menu.Item key="logout">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      )}
    </Menu>
  )

  render() {
    const { history, currentUser } = this.props
    const { selectedKeys } = this.state

    switch (currentUser.role) {
      case TRAINER:
        return this.renderTrainerMenu(history, selectedKeys)
      case ADMIN:
        return this.renderAdminMenu(history, selectedKeys)
      default:
        return this.renderClientMenu(history, selectedKeys)
    }
  }
}

export default MainMenu
