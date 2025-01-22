import { WBInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'

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
  return (
    <Flex wrap>
      <WBInput.GroupedSelect
        name="vehicle_id"
        label="No Polisi"
        rules={[validator.require]}
        optionsGroup={groupedOptions}
        allowClear
      />
      <WBInput.Text name="contract_number" label="Kontrak" allowClear />
    </Flex>
  )
}

export default NoPol
