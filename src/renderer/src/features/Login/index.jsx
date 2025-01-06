import {
  BankOutlined,
  LockOutlined,
  LoginOutlined,
  PoweroffOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import wideagri from '@renderer/assets/images/wide.png'
import { Button, Card, Form, Input, Typography } from 'antd'
import styled from 'styled-components'

const Login = () => {
  // const groupedOptions = [
  //   {
  //     label: 'Second Weigh',
  //     options: ['KB1234AC', 'KB1111AC', 'KB4838LK']
  //   },
  //   {
  //     label: 'Master Vehicle',
  //     options: ['KB2222AA', 'KB3333AB', 'KB9230AJ']
  //   }
  // ]

  const submitHandler = (values) => {
    console.log(values)
  }

  return (
    <Form name="login" initialValues={{ remember: true }} onFinish={submitHandler}>
      <StyledCard
        cover={
          <img
            alt="wideagri"
            src={wideagri}
            style={{ width: '220px', margin: 'auto', paddingTop: 20 }}
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
            key="setting"
            title="Setting"
            type="primary"
            shape="circle"
            icon={<SettingOutlined />}
            onClick={() => console.log('Setting')}
          />,
          <Button
            key="logout"
            title="Logout"
            danger
            type="primary"
            shape="circle"
            icon={<PoweroffOutlined />}
            onClick={() => console.log('Close App')}
          />
        ]}
      >
        <Typography.Title style={{ textAlign: 'center' }}>Weigh Bridge System</Typography.Title>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Input name="mill" prefix={<BankOutlined />} placeholder="Mill" disabled />
      </StyledCard>
    </Form>
  )
}

const StyledCard = styled(Card)``

export default Login
