import { Button, Col, Input, Pagination, Row } from 'antd'
import React, { PureComponent } from 'react'

import AddClientModal from './AddClientModal'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ClientCard from './ClientCard'
import hoc from './hoc'

const Search = Input.Search

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 45px;
  padding-top: 10px;
`

const AddClientButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
`

class ClientManagement extends PureComponent {
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
    error: PropTypes.object,
    loading: PropTypes.bool,
    trainersClients: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      })
    )
  }

  state = {
    addClientModalVisible: false
  }

  openAddClientModal = () => {
    this.setState({
      addClientModalVisible: true
    })
  }

  closeAddClientModal = () => {
    this.setState({
      addClientModalVisible: false
    })
  }

  render() {
    const {
      currentUser,
      history,
      location,
      error,
      loading,
      trainersClients
    } = this.props
    const { addClientModalVisible } = this.state

    if (error) {
      return <div>error</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <DefaultLayout
        currentUser={currentUser}
        history={history}
        location={location}
      >
        <Container>
          <Row>
            <Col span={24}>
              <Search
                placeholder="input search text"
                size="large"
                enterButton
              />
            </Col>
          </Row>
          <Row gutter={16}>
            {trainersClients.map((client, index) => (
              <Col
                style={{ padding: 10 }}
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}
                xxl={6}
                key={index}
              >
                <ClientCard
                  email={client.email}
                  firstName={client.firstName}
                  lastName={client.lastName}
                />
              </Col>
            ))}
          </Row>
          <Row type="flex" justify="center">
            <Pagination defaultCurrent={1} total={50} />
          </Row>
          <AddClientButton>
            <Button
              size="large"
              type="primary"
              shape="circle"
              icon="plus"
              onClick={this.openAddClientModal}
            />
            <AddClientModal
              visible={addClientModalVisible}
              handleCancel={this.closeAddClientModal}
              trainerId={currentUser._id}
            />
          </AddClientButton>
        </Container>
      </DefaultLayout>
    )
  }
}

export default hoc(ClientManagement)
