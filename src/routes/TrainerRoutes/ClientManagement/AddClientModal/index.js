import { Alert, Form, Icon, Input, Modal } from 'antd'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import hoc from './hoc'

const FormItem = Form.Item

class AddClientModal extends PureComponent {
  static propTypes = {
    addClientModalOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    form: PropTypes.object,
    createClient: PropTypes.func,
    trainerId: PropTypes.string
  }

  state = {
    isSubmitting: false,
    errorMessage: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, createClient, trainerId, handleClose } = this.props

    this.setState({
      isSubmitting: true
    })

    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          await createClient(
            values.email,
            values.password,
            values.firstName,
            values.lastName,
            trainerId
          )
          this.setState({
            isSubmitting: false
          })
          handleClose()
        } catch (error) {
          this.setState({
            errorMessage: 'error',
            isSubmitting: false
          })
        }
      } else {
        this.setState({
          isSubmitting: false
        })
      }
    })
  }

  render() {
    const {
      addClientModalOpen,
      handleClose,
      form: { getFieldDecorator }
    } = this.props
    const { errorMessage, isSubmitting } = this.state

    return (
      <Modal
        title="Create Client"
        visible={addClientModalOpen}
        onOk={this.handleSubmit}
        okText="Create"
        onCancel={handleClose}
        confirmLoading={isSubmitting}
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
