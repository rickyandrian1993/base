import { WBButton } from '@renderer/components'
import { Col, Flex, Input, Row } from 'antd'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { DashboardContext } from '..'

function ActionData() {
  const { form } = useContext(DashboardContext)

  const clearHandler = () => form.resetFields()

  const getWeight = () => window.api.getWeight('get-weight')

  const closePort = () => window.api.closePort('close-port')

  useEffect(() => {
    window.api.setWeight('set-weight', (data) => {
      // Check for first_w or second_w then
      // form.setFieldsValue({ first_w: data })
      // form.setFieldsValue({ second_w: data })
      console.log('data', data)
    })

    return () => window.api.setWeight(() => {})
  }, [])

  return (
    <ActionStyled gutter={[0, 8]}>
      <Col span={12}>
        <Input.TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 4,
            maxRows: 6
          }}
          disabled
        />
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
