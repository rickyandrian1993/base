import { dateFormat } from '@renderer/utils/constants'
import { DatePicker, Form } from 'antd'
import PropTypes from 'prop-types'

const Date = ({ name, label, rules = [], ...rest }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <DatePicker format={dateFormat} {...rest} />
    </Form.Item>
  )
}

Date.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.array
}

export default Date
