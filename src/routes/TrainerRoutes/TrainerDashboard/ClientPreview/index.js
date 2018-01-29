import { Card, Table } from 'antd'

import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }
]

const ClientPreview = ({ error, loading, getTrainersClients }) => {
  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    ;<Card loading>Loading</Card>
  }

  return (
    <Card title="My Clients" bodyStyle={{ padding: 10 }}>
      <Table
        dataSource={getTrainersClients}
        columns={columns}
        locale={{ emptyText: 'You currently have no clients' }}
      />
    </Card>
  )
}

ClientPreview.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  getTrainersClients: PropTypes.array
}

export default hoc(ClientPreview)
