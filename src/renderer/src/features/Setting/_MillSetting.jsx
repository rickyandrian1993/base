import { TextInput, WBButton, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import { electronRequest } from '@renderer/services/electronCommunication'
import { mainMenuType, validator } from '@renderer/utils/constants'
import { Col, Divider, Form, Modal, Row, Spin, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const MillSetting = ({ open, onCancel }) => {
  const [form] = Form.useForm()
  const [millOptions, setMillOptions] = useState([])
  const [loading, setLoading] = useState(false)

  const submitHandler = (values) => {
    console.log('values', values)
  }

  useEffect(() => {
    electronRequest('getMillServer', setLoading, {}, (res) => {
      console.log('res', res)
      setMillOptions([
        { value: 'mill1', label: 'Mill A' },
        { value: 'mill2', label: 'Mill B' }
      ])
    })
  }, [])

  return (
    <Modal
      open={open}
      title={
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          Mill
        </Typography.Title>
      }
      footer={null}
      closeIcon={false}
    >
      <Divider style={{ borderColor: '#7cb305' }} />
      <WBForm form={form} onFinish={submitHandler}>
        <Spin spinning={loading}>
          <SelectInput
            name="mill"
            label="Mill"
            placeholder="Please select mill"
            rules={[validator.require]}
            options={millOptions}
            allowClear
          />
        </Spin>
        <SelectInput
          name="uitype"
          label="Main Menu Type"
          placeholder="Please select main menu type"
          rules={[validator.require]}
          options={mainMenuType}
          allowClear
        />
        <TextInput
          name="kop"
          label="KOP Default"
          placeholder="Please input default KOP"
          rules={[validator.require]}
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
    </Modal>
  )
}

MillSetting.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func
}

export default MillSetting
