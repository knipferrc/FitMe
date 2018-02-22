import { Col, Row } from 'antd'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import UserCard from './UserCard'
import hoc from './hoc'
import RemoveUserModal from './RemoveUserModal'

const Container = styled.div`
  padding: 5px;
`

const CardContainer = styled.div`
  display: flex;
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
    children: PropTypes.node,
    subscribeToNewOrUpdatedTrainer: PropTypes.func,
    subscribeToTrainerRemoved: PropTypes.func
  }

  componentDidMount() {
    this.props.subscribeToNewOrUpdatedTrainer()
    this.props.subscribeToTrainerRemoved()
  }

  state = {
    removeUserModalVisible: false,
    selectedUserId: '',
    selectedUserFirstName: '',
    selectedUserLastName: ''
  }

  openRemoveUserModal = (userId, firstName, lastName) => {
    this.setState({
      removeUserModalVisible: true,
      selectedUserId: userId,
      selectedUserFirstName: firstName,
      selectedUserLastName: lastName
    })
  }

  closeRemoveUserModal = () => {
    this.setState({
      removeUserModalVisible: false
    })
  }

  render() {
    const { currentUser, history, location, allTrainers, loading } = this.props
    const {
      removeUserModalVisible,
      selectedUserId,
      selectedUserFirstName,
      selectedUserLastName
    } = this.state

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <DefaultLayout
        currentUser={currentUser}
        history={history}
        location={location}
      >
        <Container>
          <Col span={24}>
            <h1>Admin Dashboard</h1>
            <CardContainer>
              {allTrainers.map(trainer => (
                <UserCard
                  {...trainer}
                  openRemoveUserModal={this.openRemoveUserModal}
                  key={trainer._id}
                />
              ))}
            </CardContainer>
            <RemoveUserModal
              visible={removeUserModalVisible}
              handleCancel={this.closeRemoveUserModal}
              userId={selectedUserId}
              firstName={selectedUserFirstName}
              lastName={selectedUserLastName}
            />
          </Col>
        </Container>
      </DefaultLayout>
    )
  }
}

export default hoc(Dashboard)
