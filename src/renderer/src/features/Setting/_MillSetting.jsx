import { TextInput, WBButton, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
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

  useEffect(() => {
    setMillOptions([
      { value: 'mill1', label: 'Mill A' },
      { value: 'mill2', label: 'Mill B' }
    ])
  }, [])

  const submitHandler = (values) => {
    console.log('values', values)
  }

  return (
    <WBForm form={form} onFinish={submitHandler}>
      <Card
        title={
          <Typography.Title level={4} style={{ textAlign: 'center' }}>
            Mill Setting
          </Typography.Title>
        }
        actions={[<WBButton key="save" title="Save" htmlType="submit" />]}
      >
        <SelectInput
          name="mill"
          label="Mill"
          placeholder="Please select mill"
          rules={[validator.require]}
          options={millOptions}
          allowClear
        />
        <TextInput
          name="kop"
          label="KOP Default"
          placeholder="Please input default KOP"
          rules={[validator.require]}
          allowClear
        />
      </Card>
    </WBForm>
  )
}

export default MillSetting
