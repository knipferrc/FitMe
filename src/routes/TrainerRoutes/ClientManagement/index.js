import { Avatar, Button, Card, Col, Icon, Input, Pagination, Row } from 'antd'
import React, { PureComponent } from 'react'

import AddClientModal from './AddClientModal'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Meta } = Card
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
    children: PropTypes.node
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
    const { currentUser, history, location } = this.props
    const { addClientModalVisible } = this.state

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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((data, index) => (
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
                <Card
                  style={{ width: '100%' }}
                  actions={[
                    <Icon key="settings" type="setting" />,
                    <Icon key="more" type="ellipsis" />
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
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

export default ClientManagement
