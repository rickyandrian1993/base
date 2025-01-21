import { UserOutlined } from '@ant-design/icons'
import { WBDivider, WBInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'
import { useContext } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function DataRekapitulasi() {
  const { form } = useContext(DashboardContext)

  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Rekapitulasi</WBDivider>
      <WBInput.Text
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
      <WBInput.Text
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
      <WBInput.Text
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
      <WBInput.Text
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
    flex: 1 1 calc(100% / 5 - 16px);
    &:last-child {
      flex: 3 1 calc(100% / 5 * 2 - 16px);
    }
  }
`

export default DataRekapitulasi
