import AllTrainersTable from './AllTrainersTable'
import { Col } from 'antd'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import RemoveUserModal from './RemoveUserModal'

const Container = styled.div`
  padding: 5px;
`

class Dashboard extends PureComponent {
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
    children: PropTypes.node
  }

  state = {
    removeUserModalVisible: false,
    selectedUserId: ''
  }

  openRemoveUserModal = userId => {
    this.setState({
      removeUserModalVisible: true,
      selectedUserId: userId
    })
  }

  closeRemoveUserModal = () => {
    this.setState({
      removeUserModalVisible: false
    })
  }

  render() {
    const { currentUser, history, location } = this.props
    const { removeUserModalVisible, selectedUserId } = this.state

    return (
      <DefaultLayout
        currentUser={currentUser}
        history={history}
        location={location}
      >
        <Container>
          <Col span={24}>
            <h1>Admin Dashboard</h1>
            <AllTrainersTable clickDelete={this.openRemoveUserModal} />
            <RemoveUserModal
              visible={removeUserModalVisible}
              handleCancel={this.closeRemoveUserModal}
              userId={selectedUserId}
            />
          </Col>
        </Container>
      </DefaultLayout>
    )
  }
}

export default Dashboard
