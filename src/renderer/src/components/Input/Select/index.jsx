import { Form, Select } from 'antd'
import PropTypes from 'prop-types'

const SelectInput = ({ name, label, rules = [], placeholder, ...props }) => {
  const filterOption = (input, option) =>
    (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())

  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select
        {...props}
        popupMatchSelectWidth={false}
        placeholder={placeholder}
        showSearch
        filterOption={filterOption}
      />
    </Form.Item>
  )
}

SelectInput.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  rules: PropTypes.array,
  placeholder: PropTypes.string
}

export default SelectInput
