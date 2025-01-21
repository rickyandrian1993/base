import { Form, InputNumber } from 'antd'
import PropTypes from 'prop-types'

const NumberInput = ({ name, label, rules = [], placeholder, addonAfter = '', ...rest }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <InputNumber placeholder={placeholder} addonAfter={addonAfter} {...rest} />
    </Form.Item>
  )
}

NumberInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.array,
  placeholder: PropTypes.string,
  addonAfter: PropTypes.string
}

export default NumberInput
