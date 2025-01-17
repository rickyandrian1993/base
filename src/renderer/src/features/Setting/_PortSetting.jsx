import { WBButton, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import { electronRequest } from '@renderer/services/electronCommunication'
import {
  baudrateOptions,
  bitsOptions,
  comOptions,
  parityOptions,
  stopBitOptions,
  validator
} from '@renderer/utils/constants'
import { objToFormValue } from '@renderer/utils/globalUtility'
import { Col, Divider, Form, Modal, Row, Spin, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const PortSetting = ({ open, onCancel }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const submitHandler = (values) => {
    const payload = {
      ...data,
      config: {
        ...data?.config,
        port_setting: values
      }
    }

    electronRequest('updateSystemConfig', setLoading, payload, (res) => {
      if (res.code === 200) onCancel()
    })
  }

  useEffect(() => {
    electronRequest('getSystemConfig', setLoading, {}, (res) => {
      if (res?.data) setData({ ...res.data, config: JSON.parse(res.data.config) })
    })
  }, [])

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
      <Divider style={{ borderColor: '#7cb305' }} />
      <Spin spinning={loading}>
        <WBForm
          form={form}
          onFinish={submitHandler}
          fields={objToFormValue(data?.config?.port_setting)}
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
          <Divider style={{ borderColor: '#7cb305' }} />
          <Row justify="end" gutter={[8, 0]}>
            <Col>
              <WBButton key="cancel" title="Cancel" danger onClick={onCancel} />
            </Col>
            <Col>
              <WBButton type="primary" key="save" title="Save" htmlType="submit" />
            </Col>
          </Row>
        </WBForm>
      </Spin>
    </Modal>
  )
}

PortSetting.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func
}

export default PortSetting
