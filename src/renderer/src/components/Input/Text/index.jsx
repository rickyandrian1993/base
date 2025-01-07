import { Form, Input } from 'antd'
import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { name, label, rules = [], placeholder, hidden } = props

  return (
    <Form.Item name={name} label={label} rules={rules} hidden={hidden}>
      {name === 'password' || name === 'confirm_password' ? (
        <Input.Password {...props} placeholder={placeholder} allowClear />
      ) : (
        <Input {...props} placeholder={placeholder} />
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
