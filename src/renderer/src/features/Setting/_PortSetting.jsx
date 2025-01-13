import { WBButton, WBDivider, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import {
  baudrateOptions,
  bitsOptions,
  comOptions,
  parityOptions,
  stopBitOptions
} from '@renderer/utils/constants'
import { Col, Form, Modal, Row, Typography } from 'antd'
import PropTypes from 'prop-types'

const validator = {
  require: {
    required: true,
    message: 'This field is required!'
  }
}

const PortSetting = ({ open, onCancel }) => {
  const [form] = Form.useForm()

  const submitHandler = (values) => {
    console.log('values', values)
  }

  return (
    <Modal
      open={open}
      title={
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          Port
        </Typography.Title>
      }
      footer={null}
      closeIcon={false}
    >
      <WBDivider />
      <WBForm form={form} onFinish={submitHandler}>
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
        <WBDivider />
        <Row justify="end" gutter={[8, 0]}>
          <Col>
            <WBButton key="cancel" title="Cancel" danger onClick={onCancel} />
          </Col>
          <Col>
            <WBButton type="primary" key="save" title="Save" htmlType="submit" />
          </Col>
        </Row>
      </WBForm>
    </Modal>
  )
}

PortSetting.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func
}

export default PortSetting
