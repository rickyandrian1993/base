import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { WBButton, WBDivider, WBForm } from '@renderer/components'
import { SelectInput } from '@renderer/components/Input'
import { electronRequest } from '@renderer/services/electronCommunication'
import { comOptions, validator } from '@renderer/utils/constants'
import { Button, Col, Form, Input, Modal, Row, Spin, Table, Typography } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'

const dataSource = Array.from({
  length: 50
}).map((_, i) => ({
  key: i,
  name: `Edward ${i}`,
  age: 32,
  address: `London Park no. ${i}`
}))

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <a>Delete</a>
  }
]

const Fingerprint = ({ open, onCancel }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const submitHandler = (values) => {
    console.log('values', values)
  }

  return (
    <Modal
      centered
      open={open}
      title={
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          Fingerprint
        </Typography.Title>
      }
      footer={null}
      closeIcon={false}
    >
      <WBDivider />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          defaultPageSize: 5,
          showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total}`,
          size: 'small',
          simple: { readOnly: true }
        }}
      />
      <Spin spinning={loading}>
        <WBForm form={form} onFinish={submitHandler}>
          <SelectInput
            name="user"
            label="User"
            placeholder="Please select user"
            rules={[validator.require]}
            options={comOptions}
            allowClear
          />
          <SelectInput
            name="role"
            label="Role"
            placeholder="Please select role"
            rules={[validator.require]}
            options={comOptions}
            allowClear
          />
          <Form.List
            name="fingerprints"
            rules={[
              {
                validator: async (_, fingerprints) => {
                  if (!fingerprints || fingerprints.length < 1) {
                    return Promise.reject(new Error('At least 1 fingerprint'))
                  }
                }
              }
            ]}
          >
            {(fields, { add, remove }, { errors }) => {
              return (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key}>
                      <Form.Item
                        key={field.key}
                        name={field.name}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: 'Please input fingerprint name or delete this field.'
                          }
                        ]}
                        noStyle
                      >
                        <Input placeholder="Data fingerprint" disabled />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          style={{
                            position: 'absolute',
                            top: 3,
                            margin: '0 -35px',
                            color: '#999',
                            fontSize: 24,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  {fields.length <= 2 && (
                    <Form.Item>
                      <Button
                        type="dashed"
                        icon={<PlusOutlined />}
                        onClick={async () => {
                          electronRequest('scanFingerprint', setLoading, {}, (response) => {
                            if (response.code === '200' || response.code === 200)
                              add(response?.data)
                          })
                        }}
                      >
                        Add fingerprint
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  )}
                </>
              )
            }}
          </Form.List>
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
      </Spin>
    </Modal>
  )
}

Fingerprint.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func
}

export default Fingerprint
