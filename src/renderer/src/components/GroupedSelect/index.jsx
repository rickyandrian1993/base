import { Select } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'

const { Option, OptGroup } = Select

const GroupedSelect = ({ optionsGroup }) => {
  const [value, setValue] = useState(null)

  const handleChange = (value) => {
    setValue(value)
  }

  const filterOptions = (input, option) => {
    const groupName = option.groupLabel || ''
    const optionLabel = option.children.toLowerCase()
    return (
      groupName.toLowerCase().includes(input.toLowerCase()) ||
      optionLabel.includes(input.toLowerCase())
    )
  }

  return (
    <Select
      showSearch
      value={value}
      style={{ width: '100%' }}
      placeholder="Select an item"
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
