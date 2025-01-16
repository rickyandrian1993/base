import { UserOutlined } from '@ant-design/icons'
import { TextInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'
import PropTypes from 'prop-types'

function NoPol({ form }) {
  return (
    <Flex wrap>
      <TextInput
        name="username"
        label="No Polisi"
        rules={[validator.require]}
        prefix={<UserOutlined />}
        onChange={(e) => {
          const value = e.target.value.toUpperCase()
          form.setFieldsValue({
            [e.target.name]: value.replace(new RegExp(/[^A-Z_0-9]/gi), '')
          })
        }}
        allowClear
      />
      <TextInput
        name="username"
        label="Nomor"
        rules={[validator.require]}
        prefix={<UserOutlined />}
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

NoPol.propTypes = {
  form: PropTypes.object.isRequired
}

export default NoPol
