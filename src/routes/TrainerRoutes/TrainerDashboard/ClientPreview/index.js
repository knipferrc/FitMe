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

const ClientPreview = ({ error, loading, trainersClients }) => {
  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    ;<Card loading>Loading</Card>
  }

  return (
    <Card title="My Clients" bodyStyle={{ padding: 10 }}>
      <Table
        dataSource={trainersClients}
        columns={columns}
        locale={{ emptyText: 'You currently have no clients' }}
      />
    </Card>
  )
}

ClientPreview.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  trainersClients: PropTypes.array
}

export default hoc(ClientPreview)
