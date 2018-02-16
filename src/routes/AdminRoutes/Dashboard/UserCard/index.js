import React from 'react'
import PropTypes from 'prop-types'

import { Card, Icon, Tooltip } from 'antd'
const { Meta } = Card

const UserCard = ({ _id, firstName, lastName, email, openRemoveUserModal }) => {
  return (
    <Card
      style={{ width: 300, marginRight: 20 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Tooltip title="Remove User" placement="bottom">
          <Icon type="delete" onClick={() => openRemoveUserModal(_id)} />
        </Tooltip>
      ]}
    >
      <Meta title={`${firstName} ${lastName}`} description={email} />
    </Card>
  )
}

UserCard.propTypes = {
  _id: PropTypes.string,
  role: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  openRemoveUserModal: PropTypes.func
}

export default UserCard
