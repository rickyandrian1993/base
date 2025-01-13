import { TextInput, WBButton, WBDivider, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import { mainMenuType } from '@renderer/utils/constants'
import { Col, Form, Modal, Row, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const validator = {
  require: {
    required: true,
    message: 'This field is required!'
  }
}

const MillSetting = ({ open, onCancel }) => {
  const [form] = Form.useForm()
  const [millOptions, setMillOptions] = useState([])
  const [loading, setLoading] = useState(false)
  console.log('loading', loading)
  useEffect(() => {
    async function fetchMill() {
      setLoading(true)
      const data = await window.api.getMillServer('get-mill-server')
      console.log('data', data)
      setLoading(false)
    }

    fetchMill()
    setMillOptions([
      { value: 'mill1', label: 'Mill A' },
      { value: 'mill2', label: 'Mill B' }
    ])

    // return () => {
    //   window.api.getMillServer(() => {})
    // }
  }, [])

  const submitHandler = (values) => {
    console.log('values', values)
  }

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
      <WBDivider />
      <WBForm form={form} onFinish={submitHandler}>
        <SelectInput
          name="mill"
          label="Mill"
          placeholder="Please select mill"
          rules={[validator.require]}
          options={millOptions}
          allowClear
        />
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

MillSetting.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func
}

export default MillSetting
