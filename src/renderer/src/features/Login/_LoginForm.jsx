import {
  BankOutlined,
  LockOutlined,
  LoginOutlined,
  PoweroffOutlined,
  SecurityScanOutlined,
  UserOutlined
} from '@ant-design/icons'
import wideagri from '@renderer/assets/images/wide.png'
import { TextInput } from '@renderer/components'
import { Button, Card, Input, Typography } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const validator = {
  require: {
    required: true,
    message: 'This field is required!'
  }
}

const LoginForm = ({ form }) => {
  return (
    <StyledCard
      cover={
        <img
          alt="Wide Agri"
          src={wideagri}
          style={{ width: 220, margin: 'auto', paddingTop: 20 }}
        />
      }
      actions={[
        <Button
          key="login"
          color="green"
          htmlType="submit"
          title="Login"
          shape="circle"
          variant="solid"
          icon={<LoginOutlined />}
        />,
        <Button
          key="fingerprint"
          title="Fingerprint"
          type="primary"
          shape="circle"
          icon={<SecurityScanOutlined />}
          onClick={() => console.log('Fingerprint')}
        />,
        <Button
          key="exit"
          title="Close App"
          danger
          type="primary"
          shape="circle"
          icon={<PoweroffOutlined />}
          onClick={() => console.log('Close App')}
        />
      ]}
    >
      <Typography.Title style={{ textAlign: 'center' }}>Weigh Bridge System</Typography.Title>
      <TextInput
        name="username"
        label="Username"
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
        name="password"
        label="Password"
        rules={[validator.require]}
        prefix={<LockOutlined />}
      />
      <Input name="mill" prefix={<BankOutlined />} placeholder="Mill" disabled />
    </StyledCard>
  )
}

const StyledCard = styled(Card)``

LoginForm.propTypes = {
  form: PropTypes.any
}

export default LoginForm
