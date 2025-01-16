import { UserOutlined } from '@ant-design/icons'
import { TextInput, WBDivider } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function DataTimbang({ form }) {
  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Data Timbang</WBDivider>
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
    </StyledFlex>
  )
}
const StyledFlex = styled(Flex)`
  .ant-form-item {
    flex: 1 1 calc(25% - 16px);
  }
`

DataTimbang.propTypes = {
  form: PropTypes.object.isRequired
}

export default DataTimbang
