import { WBButton } from '@renderer/components'
import { Col, Flex, List, Row } from 'antd'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function ActionData() {
  const { form } = useContext(DashboardContext)
  const [data, setData] = useState([])

  const clearHandler = () => form.resetFields()

  const getWeight = () => window.api.getWeight('get-weight')

  const closePort = () => window.api.closePort('close-port')

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
      // form.setFieldsValue({ first_w: data })
      // form.setFieldsValue({ second_w: data })
      console.log('data', data)
    })

    loadData()

    return () => window.api.setWeight(() => {})
  }, [])

  return (
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
  )
}

const ActionStyled = styled(Row)`
  padding: 8px;
`

export default ActionData
