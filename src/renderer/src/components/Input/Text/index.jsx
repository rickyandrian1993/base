import { Form, Input } from 'antd'
import PropTypes from 'prop-types'

const TextInput = ({ name, label, rules = [], placeholder, hidden, ...rest }) => {
  return (
    <Form.Item name={name} label={label} rules={rules} hidden={hidden}>
      {name === 'password' || name === 'confirm_password' ? (
        <Input.Password placeholder={placeholder} allowClear {...rest} />
      ) : (
        <Input name={name} placeholder={placeholder} {...rest} />
      )}
    </Form.Item>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.array,
  placeholder: PropTypes.string,
  hidden: PropTypes.bool
}

export default TextInput
