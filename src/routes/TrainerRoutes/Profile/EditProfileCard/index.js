import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Card, Row, Col } from 'antd'

const renderTitle = (firstName, lastName) => (
  <React.Fragment>
    <h3 style={{ color: 'gray', float: 'left' }}>
      Edit Profile /&nbsp;
      <span style={{ float: 'right', display: 'inline-block', color: 'black' }}>
        {firstName} {lastName}
      </span>
    </h3>
  </React.Fragment>
)

const EditProfileCard = ({ children, firstName, lastName }) => (
  <Card title={renderTitle(firstName, lastName)}>{children}</Card>
)

EditProfileCard.propTypes = {
  children: PropTypes.node,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default EditProfileCard
