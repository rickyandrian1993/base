import { WBButton } from '@renderer/components'
import { Col, Divider, Flex, List, Modal, Row, Typography } from 'antd'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function ActionData() {
  const { form } = useContext(DashboardContext)
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [timbangan, setTimbangan] = useState(0)

  const clearHandler = () => form.resetFields()

  const getWeight = () => {
    window.api.getWeight('get-weight')
    setShowModal(true)
  }

  const closePort = () => {
    setShowModal(false)
    window.api.closePort('close-port')
  }

  const loadData = () => {
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData(body.results)
      })
      .catch(() => {})
  }

  useEffect(() => {
    window.api.setWeight('set-weight', (data) => {
      // Check for first_w or second_w then
      form.setFieldsValue({ first_w: data })
      // form.setFieldsValue({ second_w: data })
      console.log('data', data)
      setTimbangan(data)
    })

    loadData()

    return () => window.api.setWeight(() => {})
  }, [])

  return (
    <>
      {showModal && (
        <Modal
          open={showModal}
          title={
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              Timbangan
            </Typography.Title>
          }
          footer={() => <WBButton title="Simpan" onClick={closePort} />}
          closeIcon={false}
        >
          <Typography.Title style={{ textAlign: 'center' }}>{timbangan}</Typography.Title>
          <Divider style={{ borderColor: '#7cb305' }} />
        </Modal>
      )}

      <ActionStyled gutter={[0, 8]}>
        <Col span={12}>
          <div
            style={{
              height: 70,
              overflow: 'auto',
              padding: '0 16px',
              border: '1px solid rgba(140, 140, 140, 0.35)'
            }}
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <div key={item.email}>
                  {item.name.title} {item.name.first} {item.name.last}
                  <br />
                </div>
              )}
            />
          </div>
        </Col>
        <Col span={12}>
          <Flex justify="space-around" gap={8} wrap>
            <WBButton title="Bersihkan" danger onClick={clearHandler} />
            <WBButton title="NFC" />
            <WBButton title="Timbang" onClick={getWeight} />
            <WBButton type="primary" htmlType="submit" title="Simpan" />
          </Flex>
        </Col>
      </ActionStyled>
    </>
  )
}

const ActionStyled = styled(Row)`
  padding: 8px;
`

export default ActionData
