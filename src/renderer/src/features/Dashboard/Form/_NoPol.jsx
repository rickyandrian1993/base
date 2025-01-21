import { WBInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'
import { useContext } from 'react'
import { DashboardContext } from '..'

const groupedOptions = [
  {
    label: 'Second Weight',
    options: ['KB1234AC', 'KB1111AC', 'KB4838LK']
  },
  {
    label: 'Master Vehicle',
    options: ['KB2222AA', 'KB3333AB', 'KB9230AJ']
  }
]

function NoPol() {
  const { form } = useContext(DashboardContext)

  return (
    <Flex wrap>
      <WBInput.GroupedSelect
        name="vehicle_id"
        label="No Polisi"
        rules={[validator.require]}
        optionsGroup={groupedOptions}
        allowClear
      />
      <WBInput.Text
        name="contract_number"
        label="Nomor"
        onChange={(e) => {
          const value = e.target.value.toUpperCase()
          form.setFieldsValue({
            [e.target.name]: value.replace(new RegExp(/[^A-Z_0-9]/gi), '')
          })
        }}
        allowClear
      />
    </Flex>
  )
}

export default NoPol
