import { Select } from 'antd'
import PropTypes from 'prop-types'

const { Option, OptGroup } = Select

const GroupedSelect = ({ optionsGroup }) => {
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
    <Select
      allowClear
      showSearch
      // value={value}
      style={{ width: '100%' }}
      placeholder="Select vehicle number"
      onChange={handleChange}
      filterOption={filterOptions}
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
  )
}

GroupedSelect.propTypes = {
  optionsGroup: PropTypes.array
}

export default GroupedSelect
