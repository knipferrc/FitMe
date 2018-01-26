import React, { PureComponent } from 'react'

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import Select from 'antd/lib/select'
import data from './data'

const FormItem = Form.Item
const Option = Select.Option

class CreateExerciseForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object
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
    const { form: { getFieldDecorator } } = this.props
    const { isSubmitting } = this.state

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ maxWidth: '100%' }}
        layout="inline"
      >
        <FormItem>
          {getFieldDecorator('exerciseName', {
            rules: [
              { required: true, message: 'Please input an exercise name' }
            ]
          })(<Input placeholder="Exercise Name" name="exerciseName" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('muscleGroup', {
            rules: [
              { required: true, message: 'Please select a muscle group ' }
            ]
          })(
            <Select
              defaultValue="biceps"
              style={{ width: 150 }}
              placeholder="Muscle Group"
            >
              <Option value="biceps">Biceps</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('equipmentType', {
            rules: [
              { required: true, message: 'Please select a equipment type' }
            ]
          })(
            <Select
              defaultValue="machine"
              style={{ width: 150 }}
              placeholder="Equipment Type"
            >
              <Option value="machine">Machine</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('exerciseType', {
            rules: [
              { required: true, message: 'Please select a exercise type' }
            ]
          })(
            <Select
              defaultValue="cardio"
              style={{ width: 150 }}
              placeholder="Exercise Type"
            >
              <Option value="cardio">Cardio</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('mechanicsType', {
            rules: [
              { required: true, message: 'Please select a mechanics type' }
            ]
          })(
            <Select
              defaultValue="compound"
              style={{ width: 150 }}
              placeholder="Mechanics Type"
            >
              <Option value="compound">Compound</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button
            loading={isSubmitting}
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            Add Exercise
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default data(CreateExerciseForm)
