import { Table, Icon, Divider } from 'antd'
const { Column, ColumnGroup } = Table

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import hoc from './hoc'

class AllTrainers extends PureComponent {
  static propTypes = {
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

  render() {
    const { allTrainers, loading } = this.props

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
            <span>
              <a href="#">Action 一 {record.name}</a>
              <Divider type="vertical" />
              <a href="#">Delete</a>
              <Divider type="vertical" />
              <a href="#" className="ant-dropdown-link">
                More actions <Icon type="down" />
              </a>
            </span>
          )}
        />
      </Table>
    )
  }
}

export default hoc(AllTrainers)
