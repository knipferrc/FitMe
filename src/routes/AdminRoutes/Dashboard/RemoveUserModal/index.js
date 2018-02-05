import { Modal } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import hoc from './hoc'

class RemoveUserModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    handleCancel: PropTypes.func,
    userId: PropTypes.string,
    removeTrainer: PropTypes.func
  }

  handleSubmit = async () => {
    const { userId, removeTrainer } = this.props

    await removeTrainer(userId)
  }

  render() {
    const { visible, handleCancel, userId } = this.props

    return (
      <Modal
        title="Remove User"
        visible={visible}
        onOk={this.handleSubmit}
        okText="Remove User"
        onCancel={handleCancel}
      >
        <p>Are you sure you want to remove this user? {userId}</p>
      </Modal>
    )
  }
}

export default hoc(RemoveUserModal)
