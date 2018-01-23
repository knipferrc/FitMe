import Card from 'antd/lib/card'
import React from 'react'
import Table from 'antd/lib/table'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

const ClientPreview = () => (
  <Card title="My Clients">
    <Table dataSource={dataSource} columns={columns} />
  </Card>
)

export default ClientPreview
