import { LockOutlined } from '@ant-design/icons'
import { WBButton, WBForm, WBInput } from '@renderer/components'
import { electronRequest } from '@renderer/services/electronCommunication'
import { validator } from '@renderer/utils/constants'
import { Col, Divider, Form, Modal, Row, Spin, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'

const ValidatePassword = ({ open, onCancel, onSuccess }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const submitPassword = (values) => {
    if (values) {
      electronRequest('validatePassword', setLoading, values, (res) => {
        if (res.code === 200) onSuccess()
      })
    }
  }

  return (
    <Spin spinning={loading}>
      <Modal
        open={open}
        title={
          <Typography.Title level={4} style={{ textAlign: 'center' }}>
            Admin Password
          </Typography.Title>
        }
        footer={null}
        closeIcon={false}
      >
        <Divider style={{ borderColor: '#7cb305' }} />
        <WBForm form={form} onFinish={submitPassword}>
          <WBInput.Text
            name="password"
            label="Password"
            placeholder="Please input password"
            rules={[validator.require]}
            prefix={<LockOutlined />}
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
    </Spin>
  )
}

ValidatePassword.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmitPassword: PropTypes.func,
  onSuccess: PropTypes.func
}

export default ValidatePassword
