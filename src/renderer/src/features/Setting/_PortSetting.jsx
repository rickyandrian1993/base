import { WBButton, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import {
  baudrateOptions,
  bitsOptions,
  comOptions,
  parityOptions,
  stopBitOptions
} from '@renderer/utils/constants'
import { Card, Form, Typography } from 'antd'

const validator = {
  require: {
    required: true,
    message: 'This field is required!'
  }
}

const PortSetting = () => {
  const [form] = Form.useForm()

  const submitHandler = (values) => {
    console.log('values', values)
  }

  return (
    <WBForm form={form} onFinish={submitHandler}>
      <Card
        title={
          <Typography.Title level={4} style={{ textAlign: 'center' }}>
            Port Setting
          </Typography.Title>
        }
        actions={[<WBButton key="save" title="Save" htmlType="submit" />]}
      >
        <SelectInput
          name="baudrate"
          label="Baudrate"
          placeholder="Please select baudrate"
          rules={[validator.require]}
          options={baudrateOptions}
          allowClear
        />
        <SelectInput
          name="databits"
          label="Data Bits"
          placeholder="Please select data bits"
          rules={[validator.require]}
          options={bitsOptions}
          allowClear
        />
        <SelectInput
          name="stopbits"
          label="Stop Bits"
          placeholder="Please select stop bits"
          rules={[validator.require]}
          options={stopBitOptions}
          allowClear
        />
        <SelectInput
          name="parity"
          label="Parity"
          placeholder="Please select Parity"
          rules={[validator.require]}
          options={parityOptions}
          allowClear
        />
        <SelectInput
          name="com"
          label="COM"
          placeholder="Please select COM"
          rules={[validator.require]}
          options={comOptions}
          allowClear
        />
      </Card>
    </WBForm>
  )
}

export default PortSetting
