import { UserOutlined } from '@ant-design/icons'
import { WBDivider, WBInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Flex } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function DataGrading({ form }) {
  return (
    <StyledFlex wrap>
      <WBDivider orientation="left">Detail Grading</WBDivider>
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
    flex: 1 1 calc(100% / 4 - 16px);
  }
`

DataGrading.propTypes = {
  form: PropTypes.object.isRequired
}

export default DataGrading
