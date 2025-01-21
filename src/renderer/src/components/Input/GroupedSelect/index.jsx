import { Form, Select } from 'antd'
import PropTypes from 'prop-types'

const { Option, OptGroup } = Select

const GroupedSelectInput = ({ name, label, rules = [], optionsGroup, placeholder, ...rest }) => {
  const handleChange = (value) => {
    console.log('value', value)
  }

  const filterOptions = (input, option) => {
    const groupName = option.groupLabel || '' // Fallback to empty string if undefined
    const optionLabel = option.children?.toLowerCase() || '' // Use optional chaining
    return (
      groupName.toLowerCase().includes(input.toLowerCase()) ||
      optionLabel.includes(input.toLowerCase())
    )
  }

  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select
        allowClear
        showSearch
        style={{ width: '100%' }}
        placeholder={placeholder ?? `Please Input ${label}`}
        onChange={handleChange}
        filterOption={filterOptions}
        {...rest}
      >
        {optionsGroup.map((group) => (
          <OptGroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <Option key={option} groupLabel={group.label}>
                {option}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </Form.Item>
  )
}

GroupedSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.array,
  placeholder: PropTypes.string,
  optionsGroup: PropTypes.array
}

export default GroupedSelectInput
