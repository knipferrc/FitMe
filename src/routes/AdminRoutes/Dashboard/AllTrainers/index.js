import { Divider, Icon, Table } from 'antd'
import React, { Fragment, PureComponent } from 'react'

import PropTypes from 'prop-types'
import hoc from './hoc'

const { Column } = Table

const AllTrainers = ({ error, loading, allTrainers }) => {
  if (error) return <h3>Error</h3>

  if (loading) return <h3>Loading</h3>

  return (
    <Table dataSource={allTrainers} rowKey="_id" pagination={false}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Fragment>
            <a href="#">Action 一 {record.name}</a>
            <Divider type="vertical" />
            <a href="#">Delete</a>
            <Divider type="vertical" />
            <a href="#" className="ant-dropdown-link">
              More actions <Icon type="down" />
            </a>
          </Fragment>
        )}
      />
    </Table>
  )
}

AllTrainers.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  allTrainers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      password: PropTypes.string,
      whosClient: PropTypes.string
    })
  )
}

export default hoc(AllTrainers)
