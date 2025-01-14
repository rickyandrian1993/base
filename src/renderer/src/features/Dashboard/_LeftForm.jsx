import { UserOutlined } from '@ant-design/icons'
import { TextInput } from '@renderer/components'
import { validator } from '@renderer/utils/constants'
import { Divider, Flex } from 'antd'
import PropTypes from 'prop-types'

function LeftForm({ form }) {
  return (
    <div>
      <Flex wrap>
        <TextInput
          name="username"
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
      <Divider orientation="left">Data Umum</Divider>
      <Flex wrap>
        <TextInput
          name="username"
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
          label="Username"
          placeholder="Please input username"
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
    </div>
  )
}

LeftForm.propTypes = {
  form: PropTypes.any
}

export default LeftForm
