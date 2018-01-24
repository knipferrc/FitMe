import React, { PureComponent } from 'react'

import Icon from 'antd/lib/icon'
import Menu from 'antd/lib/menu'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import UserType from '../../lib/constants/UserType'
const { ADMIN, TRAINER } = UserType

class MainMenu extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    currentUser: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      role: PropTypes.string
    })
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

  render() {
    const { history, user } = this.props
    const { selectedKeys } = this.state

    if (user.role === TRAINER) {
      return this.renderTrainerMenu(history, selectedKeys)
    } else if (user.role === ADMIN) {
      return this.renderAdminMenu(history, selectedKeys)
    }
  }

  renderTrainerMenu = (history, selectedKeys) => (
    <Menu
      style={{ width: 220, height: '100%' }}
      defaultSelectedKeys={['/dashboard']}
      selectedKeys={selectedKeys}
      mode="inline"
      onClick={item => history.push(item.key)}
    >
      <Menu.Item key="/dashboard" style={{ marginTop: 0 }}>
        <Icon type="appstore-o" />Dashboard
      </Menu.Item>
      <Menu.Item key="/client-management">
        <Icon type="team" />Client Management
      </Menu.Item>
      <Menu.Item key="/workout-builder">
        <Icon type="api" />Workout Builder
      </Menu.Item>
      <Menu.Item key="/exercise-builder">
        <Icon type="database" />Exercise Builder
      </Menu.Item>
      <Menu.Item key="/my-schedule">
        <Icon type="calendar" /> My Schedule
      </Menu.Item>
      <Menu.Item key="/live-chat">
        <Icon type="contacts" />Live Chat
      </Menu.Item>
    </Menu>
  )

  renderAdminMenu = (history, selectedKeys) => (
    <Menu
      style={{ width: 220, height: '100%' }}
      defaultSelectedKeys={['/admin-dashboard']}
      selectedKeys={selectedKeys}
      mode="inline"
      onClick={item => history.push(item.key)}
    >
      <Menu.Item key="/admin-dashboard" style={{ marginTop: 0 }}>
        <Icon type="appstore-o" />Admin Dashboard
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(MainMenu)
