import { Button, Form, Input, Select } from 'antd'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const Option = Select.Option

const FormItem = styled(({ ...rest }) => <Form.Item {...rest} />)`
  margin-bottom: 15px !important;
`

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 8 },
    lg: { span: 8 },
    xl: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 10 },
    lg: { span: 10 },
    xl: { span: 10 }
  }
}

class EditProfileForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    currentUser: PropTypes.shape({
      _id: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  }

  state = {
    isSubmitting: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form } = this.props

    this.setState({
      isSubmitting: true
    })

    form.validateFieldsAndScroll(async (err, values) => {})
  }

  render() {
    const { form: { getFieldDecorator }, currentUser } = this.props
    const { isSubmitting } = this.state

    const { email, firstName, lastName } = currentUser

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        layout="inline"
      >
        <FormItem label="E-mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Email required' }]
          })(<Input placeholder="Email" name="email" />)}
        </FormItem>
        <FormItem label="First Name" {...formItemLayout}>
          {getFieldDecorator('firstName', {
            initialValue: firstName,
            rules: [{ required: true, message: 'First name required' }]
          })(<Input name="firstName" />)}
        </FormItem>
        <FormItem label="Last Name" {...formItemLayout}>
          {getFieldDecorator('lastName', {
            initialValue: lastName,
            rules: [{ required: true, message: 'Last name required' }]
          })(<Input placeholder="Last Name" name="lastName" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Button loading={isSubmitting} type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(EditProfileForm)
