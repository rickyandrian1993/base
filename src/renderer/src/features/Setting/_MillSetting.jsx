import { LockOutlined } from '@ant-design/icons'
import { TextInput, WBButton, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import { mainMenuType } from '@renderer/utils/constants'
import { Card, Form, Typography } from 'antd'
import { useEffect, useState } from 'react'

const validator = {
  require: {
    required: true,
    message: 'This field is required!'
  }
}

const MillSetting = () => {
  const [form] = Form.useForm()
  const [millOptions, setMillOptions] = useState([])
  const [lockState, setLockState] = useState(true)

  const btnAction = {
    unlock: [<WBButton key="unlock" title="Unlock" onClick={() => setLockState(false)} />],
    save: [
      <WBButton key="save" title="Save" htmlType="submit" fullwidth />,
      <WBButton key="cancel" title="Cancel" danger onClick={() => setLockState(true)} fullwidth />
    ]
  }

  useEffect(() => {
    if (!lockState) {
      setMillOptions([
        { value: 'mill1', label: 'Mill A' },
        { value: 'mill2', label: 'Mill B' }
      ])
    }
  }, [lockState])

  const submitHandler = (values) => {
    console.log('values', values)
    setLockState(true)
  }

  return (
    <WBForm form={form} onFinish={submitHandler}>
      <Card
        title={
          <>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              Mill Setting
              {lockState && <LockOutlined style={{ marginInline: 8 }} title="This item is lock" />}
            </Typography.Title>
          </>
        }
        actions={lockState ? btnAction.unlock : btnAction.save}
      >
        <SelectInput
          name="mill"
          label="Mill"
          placeholder="Please select mill"
          rules={[validator.require]}
          options={millOptions}
          disabled={lockState}
          allowClear
        />
        <SelectInput
          name="uitype"
          label="Main Menu Type"
          placeholder="Please select main menu type"
          rules={[validator.require]}
          options={mainMenuType}
          disabled={lockState}
          allowClear
        />
        <TextInput
          name="kop"
          label="KOP Default"
          placeholder="Please input default KOP"
          rules={[validator.require]}
          disabled={lockState}
          allowClear
        />
      </Card>
    </WBForm>
  )
}

export default MillSetting
