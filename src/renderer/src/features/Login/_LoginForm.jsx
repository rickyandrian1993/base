import {
  BankOutlined,
  LockOutlined,
  LoginOutlined,
  PoweroffOutlined,
  SecurityScanOutlined,
  SyncOutlined,
  UserOutlined
} from '@ant-design/icons'
import wideagri from '@renderer/assets/images/wide.png'
import { TextInput, WBForm } from '@renderer/components'
import { electronRequest } from '@renderer/services/electronCommunication'
import { validator } from '@renderer/utils/constants'
import { setStorage } from '@renderer/utils/globalUtility'
import { Button, Card, Form, Input, Spin, Typography } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const submitHandler = (values) => {
    electronRequest('login', setLoading, values, (res) => {
      console.log('res', res)
      if (res.code === 200) {
        setStorage('isLoggedIn', true)
        navigate('/dashboard')
      }
    })
  }

  return (
    <Spin spinning={loading}>
      <WBForm form={form} initialValues={{ remember: true }} onFinish={submitHandler}>
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
              key="update_data"
              title="Update Data"
              type="primary"
              shape="circle"
              icon={<SyncOutlined />}
              onClick={() => console.log('Update Data')}
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
            name="password"
            label="Password"
            placeholder="Please input password"
            rules={[validator.require]}
            prefix={<LockOutlined />}
          />
          <Input name="mill" prefix={<BankOutlined />} placeholder="Mill" disabled />
        </StyledCard>
      </WBForm>
    </Spin>
  )
}

const StyledCard = styled(Card)``

export default LoginForm
