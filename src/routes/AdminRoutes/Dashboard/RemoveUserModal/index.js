import { Modal } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import hoc from './hoc'

class RemoveUserModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    handleCancel: PropTypes.func,
    userId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    removeTrainer: PropTypes.func
  }

  handleSubmit = async () => {
    const { userId, removeTrainer, handleCancel } = this.props

    await removeTrainer(userId)

    handleCancel()
  }

  render() {
    const { visible, handleCancel, firstName, lastName } = this.props

    return (
      <Modal
        title="Remove User"
        visible={visible}
        onOk={this.handleSubmit}
        okText="Remove User"
        onCancel={handleCancel}
      >
        <p>
          Are you sure you want to remove{' '}
          <b>
            {firstName} {lastName}
          </b>?
        </p>
      </Modal>
    )
  }
}

export default hoc(RemoveUserModal)
