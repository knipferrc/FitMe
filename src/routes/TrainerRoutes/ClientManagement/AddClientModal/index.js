import { Alert, Form, Icon, Input, Modal } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import hoc from './hoc'

const FormItem = Form.Item

class AddClientModal extends PureComponent {
  static propTypes = {
    addClientModalOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    form: PropTypes.object
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  render() {
    const {
      addClientModalOpen,
      handleClose,
      form: { getFieldDecorator }
    } = this.props
    const { errorMessage } = this.state

    return (
      <Modal
        title="Create Client"
        visible={addClientModalOpen}
        onOk={this.handleOk}
        onCancel={handleClose}
      >
        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '100%' }}>
          {errorMessage && (
            <FormItem>
              <Alert message={errorMessage} type="error" showIcon />
            </FormItem>
          )}
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
                name="email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password' }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
                name="password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirmPassword', {
              rules: [
                { required: true, message: 'Please confirm your password' },
                { validator: this.checkPassword }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('firstName', {
              rules: [
                { required: true, message: 'Please enter your first name' }
              ]
            })(
              <Input
                prefix={
                  <Icon
                    type="right-square"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                type="text"
                placeholder="First Name"
                name="firstName"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastName', {
              rules: [
                { required: true, message: 'Please input your last name' }
              ]
            })(
              <Input
                prefix={
                  <Icon
                    type="left-square"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default hoc(AddClientModal)
