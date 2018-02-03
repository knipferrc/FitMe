import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'antd'

const { Meta } = Card

const ClientCard = ({ email, firstName, lastName }) => (
  <div>
    <Card
      style={{ width: '100%' }}
      actions={[
        <Icon key="settings" type="setting" />,
        <Icon key="more" type="ellipsis" />
      ]}
    >
      <Meta title={`${firstName} ${lastName}`} description={email} />
    </Card>
  </div>
)

ClientCard.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default ClientCard
